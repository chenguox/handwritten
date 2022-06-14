/**
 * 节流的this参数
 * @param {*} fn 需要执行的函数
 * @param {*} interval 间隔多少时间执行
 * @returns
 */

function throttle(fn, interval) {
  // 1、记录上一次的开始时间
  let lastTime = 0

  // 2、事件触发时，真正执行的函数
  const _throttle = function (...args) {
    // 2.1 获取当前事件触发的时间
    const nowTime = new Date().getTime()
    // 2.2 计算出还剩多收时间
    const remainTime = interval - (nowTime - lastTime)

    if (remainTime <= 0) {
      // 2.3 真正的触发函数
      fn.apply(this, args)
      // 2.4 保留上次触发的时间
      lastTime = nowTime
    }
  }

  return _throttle
}
