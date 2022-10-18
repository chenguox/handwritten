function debounce(fn, delay, immediate = false) {
  let timer = null
  let first = true

  const _debounce = function (...args) {
   return new Promise((resolve, reject) => {
      if (timer) clearTimeout(timer)

      if (first && immediate) {
        const result = fn.apply(this, args)
        first = false
        resolve(result)
      } else {
        timer = setTimeout(() => {
          const result = fn.apply(this, args)
          first = false
          timer = null
          resolve(result)
        }, delay)
      }
   })
  }

  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
    first = true
    timer = null
  }

  return _debounce
}
