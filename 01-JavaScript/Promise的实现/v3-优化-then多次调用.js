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
    // 将成功回调和失败的回调放到数组中
    if (this.status === PROMISE_STATUS_PEDDING) {
      this.onFulFilledFn.push(onFulFilled)
      this.onRejectedFn.push(onRejected)
    }
  }
}

const promise = new GXPromise((resolve, reject) => {
  resolve(111)
  // reject(222)
})

promise.then(
  (res) => {
    console.log('onFulFilled', res)
  },
  (err) => {
    console.log('onRejected', err)
  }
)

promise.then(
  (res) => {
    console.log('onFulFilled', res)
  },
  (err) => {
    console.log('onRejected', err)
  }
)
