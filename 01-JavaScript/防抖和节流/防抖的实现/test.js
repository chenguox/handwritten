function debounce(fn, delay, immediate = false) {
  let timer = null
  let flag = true

  const _debounce = function (...args) {
    return new Promise((resolve, reject) => {
      if (timer) clearTimeout(timer)
      if (immediate && flag) {
        const result = fn.apply(this, args)
        flag = false
        resolve(result)
      } else {

        timer = setTimeout(() => {
          const result = fn.apply(this, args)
          falg = false
          resolve(result)
        }, delay)
      }
    })
  }

  _debounce.cancle = function () {
    if (timer) clearTimeout(timer)
    timer = null
    flag = false
  }

  return _debounce
}