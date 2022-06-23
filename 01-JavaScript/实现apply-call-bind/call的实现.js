Function.prototype.gxcall = function (thisArg, ...args) {
  // 1、获取要执行的函数
  const fn = this

  // 2、对 thisArg 进行处理
  thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : window

  // 3、执行 fn 函数
  thisArg.fn = fn
  const result = thisArg.fn(...args)
  delete thisArg.fn

  // 4、返回执行的结果
  return result
}

function foo() {
  console.log('foo函数被执行', this)
}

function sum(num1, num2) {
  console.log('sum函数被执行', this, num1, num2)
  return num1 + num2
}

// 自己实现的函数的hycall方法
// 默认进行隐式绑定
foo.gxcall({ name: 'why' })
foo.gxcall(0)
foo.gxcall(undefined)
var result = sum.gxcall('abc', 20, 30)
console.log('hycall的调用:', result)