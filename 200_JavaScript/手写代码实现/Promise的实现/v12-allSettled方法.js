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

  static resolve(value) {
    return new GXPromise((resolve, reject) => resolve(value))
  }

  static reject(reason) {
    return new GXPromise((resolve, reject) => reject(reason))
  }

  static all(promises) {
    // 问题关键: 什么时候要执行resolve, 什么时候要执行reject
    return new GXPromise((resolve, reject) => {
      const values = []
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            values.push(res)
            if (promises.length === values.length) {
              resolve(values)
            }
          },
          (err) => {
            reject(err)
          }
        )
      })
    })
  }

  static allSettled(promises) {
    return new GXPromise((resolve, reject) => {
      const results = []
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            results.push({ status: PROMISE_STATUS_FULFILLED, value: res })
            if (promises.length === results.length) {
              resolve(results)
            }
          },
          (err) => {
            results.push({ status: PROMISE_STATUS_FULFILLED, value: err })
            if (promises.length === results.length) {
              resolve(results)
            }
          }
        )
      })
    })
  }
}

const promise1 = new GXPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1111)
  }, 1000)
})

const promise2 = new GXPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(2222)
  }, 2000)
})

const promise3 = new GXPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(3333)
  }, 3000)
})

GXPromise.allSettled([promise1, promise2, promise3])
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
