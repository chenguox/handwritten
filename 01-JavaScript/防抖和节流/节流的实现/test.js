function throttle(fn, interval, { leading: false, tailing: false }) {
  let lastTime = 0
  let timer = null

  const _throttle = function(...args){
    return new Promise((resolve, reject) => {
      const nowTime = new Date().getTime()

      // 本身的逻辑就会立即执行，在 false 不立即执行
      if(!leading && !lastTime) lastTime = nowTime

      const remainTime = interval - (nowTime - lastTime)

      if(remainTime <= 0) {
        if(timer) {
          clearTimeout(timer)
          timer = null
        }

        const result = fn.apply(this, args)
        lastTime = nowTime

        resolve(result)
        return 
      }

      // timer 为 null 的时候
      if(tailing && !timer) {
        timer = setTimeout(() => {
          timer = null
          lastTime = leading ? new Date().getTime() : 0
          const result = fn.apply(this, args)
          resolve(result)
        }, remainTime)
      }
    })
  }

  return _throttle
}
