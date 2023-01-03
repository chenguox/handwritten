const PROMISE_STATUS_PEDDING = 'pedding'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class GXPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PEDDING
    this.value = undefined
    this.reason = undefined

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PEDDING) {
        this.status = PROMISE_STATUS_FULFILLED
        // 推迟到下个循环执行
        queueMicrotask(() => {
          this.value = value
          this.onFulFilled(this.value)
        })
      }
    }

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PEDDING) {
        this.status = PROMISE_STATUS_REJECTED
        queueMicrotask(() => {
          this.reason = reason
          this.onRejected(this.reason)
        })
      }
    }

    executor(resolve, reject)
  }

  then(onFulFilled, onRejected) {
    this.onFulFilled = onFulFilled
    this.onRejected = onRejected
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
