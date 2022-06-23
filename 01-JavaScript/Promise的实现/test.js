const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

function handleCatchError(execFn, value, resolve, reject) {
  try {
    const result = execFn(value)
    resolve(result)
  } catch (error) {
    reject(error)
  }
}

class GXPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulFilledFn = []
    this.onRejectedFn = []

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_FULFILLED
          this.value = value
          this.onFulFilledFn.forEach((fn) => {
            fn(this.value)
          })
        })
      }
    }

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return
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
    } catch (error) {
      reject(error)
    }
  }

  then(onFulFilled, onRejected) {
    const defaultOnRejected = (error) => {
      throw error
    }
    onRejected = onRejected || defaultOnRejected

    return new GXPromise((resolve, reject) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        // 对原先的回调函数进行改造
        this.onFulFilledFn.push(() => {
          handleCatchError(onFulFilled, this.value, resolve, reject)
          // try {
          //   const value = onFulFilled(this.value)
          //   resolve(value)
          // } catch (error) {
          //   reject(error)
          // }
        })
        this.onRejectedFn.push(() => {
          handleCatchError(onRejected, this.reason, resolve, reject)
          // try {
          //   const reason = onRejected(this.reason)
          //   resolve(reason)
          // } catch (error) {
          //   reject(error)
          // }
        })
      }

      // 如果在then调用的时候, 状态已经确定下来
      if (this.status === PROMISE_STATUS_FULFILLED && onFulFilled) {
        handleCatchError(onFulFilled, this.value, resolve, reject)
        // try {
        //   const value = onFulFilled(this.value)
        //   resolve(value)
        // } catch (error) {
        //   reject(error)
        // }
      }

      if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
        handleCatchError(onRejected, this.reason, resolve, reject)
        // try {
        //   const reason = onRejected(this.reason)
        //   resolve(reason)
        // } catch (error) {
        //   reject(error)
        // }
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
    return new Promise((resolve, reject) => {
      resolve(value)
    })
  }

  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason)
    })
  }

  static all(promises) {
    return new Promise((resolve, reject) => {
      const result = []
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            result.push(res)
            if (result.length === promises.length) {
              resolve(result)
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
            results.push({
              status: PROMISE_STATUS_FULFILLED,
              value: res,
            })
            if (results.length === promises.length) {
              resolve(results)
            }
          },
          (err) => {
            results.push({
              status: PROMISE_STATUS_REJECTED,
              value: err,
            })
            if (results.length === promises.length) {
              resolve(results)
            }
          }
        )
      })
    })
  }

  static race(promises) {
    return new GXPromise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(resolve, reject)
      })
    })
  }

  static any(promises) {
    return new GXPromise((resolve, reject) => {
      const reasons = []
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            resolve(res)
          },
          (err) => {
            reasons.push(err)
            if (reasons.length === promises.length) {
              reject(new AggregateError(reasons))
            }
          }
        )
      })
    })
  }
}

const promise1 = new GXPromise((resolve, reject) => {
  setTimeout(() => {
    reject(1111)
  }, 2000)
})

const promise2 = new GXPromise((resolve, reject) => {
  setTimeout(() => {
    reject(2222)
  }, 1000)
})

const promise3 = new GXPromise((resolve, reject) => {
  setTimeout(() => {
    reject(3333)
  }, 3000)
})

GXPromise.any([promise1, promise2, promise3])
  .then((res) => {
    console.log('res:', res)
  })
  .catch((err) => {
    console.log('err:', err.errors)
  })
