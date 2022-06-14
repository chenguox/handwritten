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
    return new GXPromise(()=>{
       // 将成功回调和失败的回调放到数组中
    if (this.status === PROMISE_STATUS_PEDDING) {
      this.onFulFilledFn.push(onFulFilled)
      this.onRejectedFn.push(onRejected)
    }

    // 如果在then调用的时候, 状态已经确定下来
    if (this.status === PROMISE_STATUS_FULFILLED && onFulFilled) {
      onFulFilled(this.value)
    }
    if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
      onRejected(this.reason)
    }
    })
  }
}

const promise = new GXPromise((resolve, reject) => {
  resolve(111)
  reject(222)
})

promise.then(
  (res) => {
    console.log('onFulFilled', res)
  },
  (err) => {
    console.log('onRejected', err)
  }
)

// then 推迟了一个延迟，那么状态已经变成 fulfilled 了
setTimeout(() => {
  promise.then(
    (res) => {
      console.log('onFulFilled', res)
    },
    (err) => {
      console.log('onRejected', err)
    }
  )
}, 2000)
