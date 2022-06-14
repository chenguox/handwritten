/**
 * 节流的头部立即执行
 * @param {*} fn 需要执行的函数
 * @param {*} interval 间隔多少时间执行
 * @param {*} options  是否执行
 * @returns
 */

function throttle(fn, interval, options = { leading: false, tailing: true }) {
  // 1、记录上一次的开始时间
  let lastTime = 0
  let timer = null

  // 2、事件触发时，真正执行的函数
  const _throttle = function (...args) {
    // 2.1 获取当前事件触发的时间
    const nowTime = new Date().getTime()

    // 不需要立即执行
    if (!lastTime && !leading) lastTime = nowTime

    // 2.2 计算出还剩多收时间
    const remainTime = interval - (nowTime - lastTime)

    if (remainTime <= 0) {
      // 如果触发就取消定时器的，避免执行两次
      clearTimeout(time)
      timer = null
      // 2.3 真正的触发函数
      fn.apply(this, args)
      // 2.4 保留上次触发的时间
      lastTime = nowTime
    }

    // 尾部是否执行, timer 可以避免在时间间隔多次设置定时器
    if (tailing && !timer) {
      // 取消定时器，重新设置
      clearTimeout(timer)
      const timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, interval)
    }
  }

  return _throttle
}
