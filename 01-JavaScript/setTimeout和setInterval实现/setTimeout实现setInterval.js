function mySetInterval(fn, delay) {
  let timer = null

  // 利用递归实现
  const _interval = function () {
    timer = setTimeout(() => {
      fn()
      // 递归实现间隔执行
      _interval()
    }, delay)
  }
  // 触发第一次执行
  _interval()

  // 停止定时器
  const crtl = {
    cancel: () => {
      clearTimeout(timer)
    }
  }

  return crtl
}

// 测试代码
const fn = function () {
  console.log('fn函数被执行了~');
}

const crtl = mySetInterval(fn, 2000)

setTimeout(() => {
  crtl.cancel()
}, 9000)
