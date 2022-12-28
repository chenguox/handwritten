function bar() {
  console.log("bar 函数被执行了 ~")
  console.log("================")
}

function foo() {
  // 浏览器默认提供给我们的其他函数
  console.log("foo函数执行")
  console.log("Hello World")

  // 调用自己定义的函数
  bar()

  // 其他代码
  console.log("other coding")
}

foo()