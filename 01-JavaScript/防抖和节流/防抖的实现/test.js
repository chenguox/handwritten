function debounce(fn, delay, immediate = false) {
  let timer = null
  // 第一次是否立即执行过了
  let first = false

  const _debounce = function (...args) {
    return new Primise((resolve, reject) => {
      if (timer) clearTimeout(timer)

      if (immediate && !first) {
        const result = fn.apply(this, args)
        first = true
        resolve(result)
      } else {
        timer = setTimeout(() => {
          const result = fn.apply(this, args)
          first = false
          resolve(result)
        }, delay);
      }
    })
  }

  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
    first = false
    timer = null
  }

  return _debounce
}