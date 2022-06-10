function debounce(fn, delay, immediate = false) {
  let timer = null
  let isInvoke = false

  const _debounce = function (...args) {
    return new Promise((resolve, reject) => {
      if (timer) clearTimeout(timer)

      // 是否立即执行
      if (immediate && !isInvoke) {
        isInvoke = true
        const result = fn.apply(this, args)
        resolve(result)
      } else {
        timer = setTimeout(() => {
          const result = fn.apply(this, args)
          resolve(result)
          isInvoke = false
        }, delay)
      }
    })
  }

  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
    timer = null
    isInvoke = false
  }

  return _debounce
}
