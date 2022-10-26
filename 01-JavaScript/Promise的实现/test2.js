const PROMISE_STATUS_PEDDING = 'pedding'
const PROMISE_STATUS_FULFILLED = 'fuilfilled'
const PROMISE_STATUS_REJECTED = 'rejected'


class MyPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PEDDING 
    this.value = ''
    this.reason = ''
    this.onFulfilledFn = []
    this.onRejectedFn = []

    const resolve = (value) => {
      if(this.status === PROMISE_STATUS_PEDDING) {
        queueMicrotask(() => {
          if(this.status !== PROMISE_STATUS_PEDDING) return
          this.status = PROMISE_STATUS_FULFILLED
          this.value = value
          this.onFulfilledFn.forEach((fn) => {
            fn(this.value)
          })
        })
      }

    }

    const reject = (reason) => {
      if(this.status === PROMISE_STATUS_PEDDING) {
        queueMicrotask(() => {
          if(this.status !== PROMISE_STATUS_PEDDING) return
          this.status = PROMISE_STATUS_FULFILLED
          this.reason = reason
          this.onRejectedFn.forEach((fn) => {
            fn(this.reason)
          })
        })
      }
    }

    executor(resolve, reject)
  }

  then(onFulfilled, onRejected) {
    const defaultRejected = (err) => throw err
    onRejected = onRejected || defaultRejected

    return new MyPromise((resolve, reject) => {
      if(this.status === PROMISE_STATUS_PEDDING) {
        this.onFulfilledFn.push(() => {
          const value = onFulfilled(this.value)
          resolve(value)
        })
        this.onRejectedFn.push(() => {
          const reason = onRejected(this.reason)
          reject(reason)
        })
      }
  
      if(this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
        const value = onFulfilled(this.value)
        resolve(value)
      }
  
      if(this.status === PROMISE_STATUS_REJECTED && onRejected) {
        const reason = onRejected(this.reason)
        reject(reason)
      }
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  finally(onFinally) {
    this.then(() => {
      onFinally()
    },() => {
      onFinally()
    })
  }

  static resolve(value) {
    return new MyPromise((resolve, reject) => {
      resolve(value)
    })
  }

  static reject(reason) {
    return new MyPromise()
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      const result = []
      promises.forEach(promise => {
        promise.then((res) => {
          // result.push({ status: PROMISE_STATUS_FULFILLED, value: res})
          // if(result.length === promises.length) {
          //   resolve(result)
          // }
        },(err) => {
          // result.push({ status: PROMISE_STATUS_FULFILLED, reason: err})
          // if(result.length === promises.length) {
          //   resolve(result)
          // }
        })
      })

    })
  }
}

const promise = new MyPromise((resolve, reject) => {
  resolve()
  reject()
})

promise.then(
  (res) => {
    console.log('resolve:', res)
  }, 
  (err) => {
    console.log('resolve:', err)
  }
)

promise.catch(err => {
  console.log(err)
})

promise.then(res => {
  console.log(res)
})

setTimeout(() => {
  promise.then(
    (res) => {
      console.log('resolve:', res)
    }, 
    (err) => {
      console.log('resolve:', err)
    }
  )
}, 2000)