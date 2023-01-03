Function.prototype.gxbind = function (thisArg, ...args) {
  // 1、获取要执行的函数
  const fn = this

  // 2、处理 thisArg 
  thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : window

  function proxyFn(...args2) {
    // 3、将函数放到 thisArg 中进行调用
    thisArg.fn = fn
    // 对两个传入的参数进行合并
    const finalArgs = [...args, ...args2]
    const result = thisArg.fn(...finalArgs)
    delete thisArg.fn

    return result
  }

  // 4、返回 bind 函数
  return proxyFn
}

// 测试代码
function foo() {
  console.log("foo被执行", this)
  return 20
}

function sum(num1, num2, num3, num4) {
  console.log(num1, num2, num3, num4)
}


// 使用自己定义的bind
var bar = foo.gxbind("abc")
var result = bar()
console.log(result)

var newSum = sum.gxbind("abc", 10, 20)
var result = newSum(30, 40)