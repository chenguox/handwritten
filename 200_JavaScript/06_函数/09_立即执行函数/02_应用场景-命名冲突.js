// 应用场景一: 防止全局变量的命名冲突

// 立即执行函数和普通的代码有什么区别?
// 在立即执行函数中定义的变量是有自己的作用域的
(function() {
  var message = "Hello World1"
  console.log(message)
})()

console.log(message) // undefined
var message = "Hello World2"
console.log(message)