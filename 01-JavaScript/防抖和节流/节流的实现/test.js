function throttle(fn, interval, option = {
  leading: true
  tailing: false
}) {
  let lastTime = 0
  let timer = null

  const _throttle = funciton(...args) {
    return new Promise((resolve, reject) => {
      // 默认情况下，第一次是会立即执行的
      let nowTime = new Date().getTime()

      // 不想立即执行，且是第一次
      if (!lastTime && !leading) {
        lastTime = nowTime
      }

      let remainTime = interval - (nowTime - lastTime)
      if (remainTime <= 0) {
        if (!timer) {
          clearTimeout(timer)
          timer = null
        }

        const resutl = fn.apply(this, args)

        lastTime = nowTime
        resolve(resutl)
        return
      }

      // 需要尾部执行，算出剩余时间来设置一个定时器
      if (tailing && !timer) {

        timer = setTimeout(() => {
          const result = fn.apply(this, args)
          resolve(result)
          lastTime = !leading ? 0 : new Date().getTime()
          timer = null
        }, remainTime)
      }
    })
  }

  _throttle.cancel = function () {
    if (timer) {
      clearTimeout(timer)
      timer = null
      lastTime = 0
    }
  }

  return _throttle
}