const PROMISE_STAUTS_PADDING = 'padding'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

const handleError = function (resolve, reject, params, execFn) {
  try {
    const result = execFn(params)
    resolve(result)
  } catch (error) {
    reject(error)
  }
}

class MyPromise {
  constructor(executor) {
    this.status = PROMISE_STAUTS_PADDING
    this.value = ''
    this.reason = ''
    this.onFulfilledFn = []
    this.onRejectedFn = []

    const resolve = (value) => {
      if (this.status === PROMISE_STAUTS_PADDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STAUTS_PADDING) return
          this.status = PROMISE_STATUS_FULFILLED
          this.value = value
          this.onFulfilledFn.forEach(fn => {
            fn(this.value)
          });
        })
      }
    }

    const reject = (reason) => {
      if (this.status === PROMISE_STAUTS_PADDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STAUTS_PADDING) return
          this.status = PROMISE_STATUS_REJECTED
          this.reason = reason
          this.onRejectedFn.forEach(fn => {
            fn(this.reason)
          })
        })
      }
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    // then -> catch
    const defualtOnRejected = err => {
      throw err
    }

    onRejected = onRejected || defualtOnRejected

    return new MyPromise((resolve, reject) => {
      this.onFulfilledFn.push(() => {
        handleError(resolve, reject, this.value, onFulfilled)
      })
      this.onRejectedFn.push(() => {
        handleError(resolve, reject, this.reason, onRejected)
      })

      if (this.status === PROMISE_STATUS_FULFILLED) {
        handleError(resolve, reject, this.value, onFulfilled)
      }

      if (this.status === PROMISE_STATUS_REJECTED) {
        handleError(resolve, reject, this.reason, onRejected)
      }
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  finally(onFinally) {
    this.then(() => {
      onFinally()
    }, () => {
      onFinally()
    })
  }

  static Resolve(value) {
    return new MyPromise((resolve, reject) => {
      resolve(value)
    })
  }

  static Reject(err) {
    return new MyPromise((resolve, reject) => {
      reject(err)
    })
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      const results = []
      for (const promise of promises) {
        promise.then(
          res => {
            results.push(res)
            if (promises.length === results.length) {
              resolve(results)
            }
          },
          err => {
            reject(err)
          }
        )
      }
    })
  }

  static allSettled(promises) {
    return new MyPromise((resolve, reject) => {
      const result = []
      for(const promise of promises) {
        promise.then(
          res => {
            result.push({ status: 'fulfilled', value: res })
            if(promises.length === result.length) {
              resolve(result)
            }
          },
          err => {
            result.push({ status: 'rejected', value: err })
            if(promises.length === result.length) {
              resolve(result)
            }
          }
        )
      }
    })
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      for(const promise of promises) {
        promise.then(
          res => {
            resolve(res)
          },
          err => {
            reject(err)
          }
        )
      }
    })
  }

  static any(promises) {
    return new MyPromise((resolve, reject) => {
      const reason = []
      for(const promise of promises) {
        promise.then(
          res => {
            resolve(res)
          },
          err => {
            reason.push(err)
            if(promises.length === reason.length) {
              reject(new Error(reason))
            }
          }
        )
      }
    })
  }
}


// const promise = new MyPromise((resolve, reject) => {
//   // resolve(111)
//   reject(222)
// })

// promise.then(res => {
//   console.log('resolve: ', res)
// }, err => {
//   console.log('reject: ', err)
// })

// promise.then(res => {
//   console.log('resolve: ', res)
// }, err => {
//   console.log('reject: ', err)
// })

// setTimeout(() => {
//   promise.then(res => {
//     console.log('resolve: ', res)
//   }, err => {
//     console.log('reject: ', err)
//   })
// }, 2000)


// promise.then(res => {
//   console.log('resolve: ', res)
//   return res
// }).then(res => {
//   console.log('resolve2: ', res)
// })

// promise.catch(err => {
//   console.log('reject1: ', err)
// })

// promise.then(res => {
//   console.log('resolve: ', res)
//   return res
// }).catch(err => {
//   console.log('reject: ', err)
// }).finally(() => {
//   console.log('finally:')
// })

// MyPromise.Resolve(123).then(res => {
//   console.log('resolve: ', res)
// })

// MyPromise.Reject(123).catch(err => {
//   console.log('reject: ', err)
// })

const p1 = new MyPromise((resolve, reject) => {
  setTimeout(()=>{
    reject('111')
  }, 3000)
})
const p2 = new MyPromise((resolve, reject) => {
  setTimeout(()=>{
    reject('222')
  }, 2000)
})

const p3 = new MyPromise((resolve, reject) => {
  setTimeout(()=>{
    reject('222333')
  }, 1000)
})

MyPromise.any([p1, p2, p3]).then(result => {
  console.log(result)
}).catch(err => {
  console.log(err)
})

// then => 异步then => 多次then => 单独then => 链式调用then => 异常处理 => catch => finally
// Resolve => Reject