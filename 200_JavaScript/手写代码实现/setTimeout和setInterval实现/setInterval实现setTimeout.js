function mySetTimeout(fn, delay) {
  const timer = setInterval(() => {
    fn()
    clearInterval(timer)
  }, delay)
}

// 测试代码
const fn = function () {
  console.log('执行了fn函数~');
}

mySetTimeout(fn, 2000)