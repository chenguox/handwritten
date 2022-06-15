const PROMISE_STATUS_PEDDING = 'pedding'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

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

    executor(resolve, reject)
  }

  then(onFulFilled, onRejected) {
    return new GXPromise((resolve, reject) => {
      // 将成功回调和失败的回调放到数组中
      if (this.status === PROMISE_STATUS_PEDDING) {
        // 改造原先直接将回调函数直接放进数组
        this.onFulFilledFn.push(() => {
          const value = onFulFilled(this.value)
          resolve(value)
        })
        this.onRejectedFn.push(() => {
          const reason = onRejected(this.reason)
          // 异常才调用 reject
          resolve(reason)
        })
      }

      // 如果在then调用的时候, 状态已经确定下来
      if (this.status === PROMISE_STATUS_FULFILLED && onFulFilled) {
        const value = onFulFilled(this.value)
        // 将执行完的值 resolve 作为下次 then 的执行
        resolve(value)
      }
      if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
        const reason = onRejected(this.reason)
        reject(reason)
      }
    })
  }
}

const promise = new GXPromise((resolve, reject) => {
  console.log('状态pending')
  resolve(111)
  // reject(222)
})

promise
  .then(
    (res) => {
      console.log('onFulFilled', res)
      return res
    },
    (err) => {
      console.log('onRejected', err)
      return err
    }
  )
  .then(
    (res) => {
      console.log('onFulFilled2', res)
    },
    (err) => {
      console.log('onRejected2', err)
    }
  )
