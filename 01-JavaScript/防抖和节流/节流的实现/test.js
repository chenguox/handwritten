function throttle(fn, interval, { leading: false, traling: true}) {

  let lastTime = 0
  let timer = null

  const _throttle = function (...args) {
    return new Promise((resolve, reject)=>{
      let nowTime = new Date().getTime()

      if (!lastTime && !leading) lastTime = nowTime
  
      let remainTime = interval - (nowTime - lastTime)
      if (remainTime <= 0) {
        if (timer) {
          clearTimeout(timer)
          timer = null
        }
        const result = fn.apply(this, args)
        resolve(result)
      }
  
      if (!timer && traling) {
        timer = setTimeout(() => {
          timer = null
          const result = fn.apply(this, args)
          lastTime = !leading ? 0 : new Date().getTime()
          resolve(result)
        }, remainTime)
      }
    })
  }

  _throttle.cancel = function () {
    if(timer) {
      clearTimeout(timer)
      timer = null
      lastTime = 0
    }
  }

  return _throttle
}