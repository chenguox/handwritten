function debounce(fn, delay, immediate = false, resultCallback) {
  let timer = null
  let isInvoke = false

  const _debounce = function (...args) {
    if (timer) clearTimeout(timer)

    // 是否立即执行
    if (immediate && !isInvoke) {
      isInvoke = true
      const result = fn.apply(this, args)
      if (resultCallback) resultCallback(result)
    } else {
      timer = setTimeout(() => {
        const result = fn.apply(this, args)
        if (resultCallback) resultCallback(result)
        isInvoke = false
      }, delay)
    }
  }

  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
    timer = null
    isInvoke = false
  }

  return _debounce
}
