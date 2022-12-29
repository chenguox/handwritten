// 1. 常见的写法
(function() {
  console.log("立即执行函数被调用~")
})()


// 2. 错误的写法
// () -> 优先级的()
// function foo() {

// }()


// 3. 其他写法
// 匿名函数
(function(fn) {
  console.log("立即执行函数被调用")
}())

// +(正号)-(符号)!(取反) - 了解
+function foo() {}()