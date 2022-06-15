// 参考 promise a+ 规范设计
// https://promisesaplus.com/
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
        this.value = value
        console.log('resolve:', this.value)
      }
    }

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PEDDING) {
        this.status = PROMISE_STATUS_REJECTED
        this.reason = reason
        console.log('reject:', this.reason)
      }
    }

    executor(resolve, reject)
  }
}

const promise = new GXPromise((resolve, reject) => {
  reject(222)
  resolve(111)
})
