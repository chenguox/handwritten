// 递归调用
// 默认情况下, 会产生无限调用的情况
function foo() {
  console.log("foo函数被执行了")
  foo()
}

foo()