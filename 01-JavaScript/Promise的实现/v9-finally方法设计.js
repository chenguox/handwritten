const PROMISE_STATUS_PEDDING = 'pedding'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

function execFunctionWithCatchError(execFn, value, resolve, reject) {
  try {
    const result = execFn(value)
    resolve(result)
  } catch (err) {
    reject(err)
  }
}

class GXPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PEDDING
    this.value = undefined
    this.reason = undefined
    this.onFulFilledFn = []
    this.onRejectedFn = []

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PEDDING) {
        queueMicrotask(() => {
          // 需要添加判断，才能 resolve(111) 执行后，不会执行 reject(222)
          if (this.status !== PROMISE_STATUS_PEDDING) return
          this.status = PROMISE_STATUS_FULFILLED
          this.value = value
          this.onFulFilledFn.forEach((fn) => {
            fn(this.value)
          })
        })
      }
    }

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PEDDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PEDDING) return
          this.status = PROMISE_STATUS_REJECTED
          this.reason = reason
          this.onRejectedFn.forEach((fn) => {
            fn(this.reason)
          })
        })
      }
    }

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(onFulFilled, onRejected) {
    // 当调用 then 方法只传一个 onFulFilled 参数时， onRejected 是 undefined，如果直接放入数组，会出错(不是一个函数)
    const defaultOnRejected = (err) => {
      throw err
    }
    onRejected = onRejected || defaultOnRejected

    // const defaultOnFulfilled = (value) => {
    //   return value
    // }
    // onFulfilled = onFulfilled || defaultOnFulfilled

    return new GXPromise((resolve, reject) => {
      // 将成功回调和失败的回调放到数组中
      if (this.status === PROMISE_STATUS_PEDDING) {
        // 改造原先直接将回调函数直接放进数组
        this.onFulFilledFn.push(() => {
          execFunctionWithCatchError(onFulFilled, this.value, resolve, reject)
        })
        this.onRejectedFn.push(() => {
          execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
        })
      }

      // 如果在then调用的时候, 状态已经确定下来
      if (this.status === PROMISE_STATUS_FULFILLED && onFulFilled) {
        execFunctionWithCatchError(onFulFilled, this.value, resolve, reject)
      }
      if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
        execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
      }
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  finally(onFinally) {
    this.then(
      () => {
        onFinally()
      },
      () => {
        onFinally()
      }
    )
  }
}

const promise = new GXPromise((resolve, reject) => {
  resolve(111)
  // reject(222)
})

// promise
//   .then((res) => {
//     console.log('res1:', res)
//     return 'aaaaa'
//   })
//   .then((res) => {
//     console.log('res2:', res)
//   })
//   .catch((err) => {
//     console.log('err:', err)
//   })
//   .finally(() => {
//     console.log('finally')
//   })

promise.then(undefined, (res) => {
  console.log('aaa')
})
