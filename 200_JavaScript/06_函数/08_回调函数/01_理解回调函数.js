// 函数回调的概念理解
function foo(fn) {
  fn() // 通过 fn 去调用 bar 函数的过程, 称之为函数的回调
}
function bar() {
  console.log("bar 函数被执行了~")
}
foo(bar)