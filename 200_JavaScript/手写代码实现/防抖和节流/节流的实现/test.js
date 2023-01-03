function throttle(fn, interval, {leading: true, tailing: false}) {
  let lastTime = 0
  let timer = null

  const _throttle = function(...args) {
    return new Promise((resolve, reject) => {
      const nowTime = new Date().getTime()

      if(!leading && !lastTime) lastTime = nowTime
  
      const remainTime = interval - (nowTime - lastTime)
      if(remainTime <= 0) {
        if(timer) {
          clearTimeout(timer)
          timer = null
        }
        const result = fn.apply(this, args)
        resolve(result)
        lastTime = nowTime
      }
  
      if(tailing && !timer) {
        timer = setTimeout(() => {
          const result = fn.apply(this, args)
          timer = null
          lastTime = leading ? 0 : new Date().getTime()
          resolve(result)
        }, remainTime)
      }
    })
  }

  _throttle.cancel = function() {
    if(timer) {
      clearTimeout(timer)
      timer = null
      lastTime = 0
    }
  }

  return _thorttle
}