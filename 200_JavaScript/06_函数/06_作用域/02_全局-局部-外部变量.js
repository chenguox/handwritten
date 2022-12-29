// 1. 全局变量(global variable)
// 在全局(script元素中)定义一个变量, 那么这个变量是可以在定义之后的任何方位内被访问到的, 那么这个变量就称之为是一个全局变量

// 2. 局部变量(local variable)
// 在函数内部定义的变量, 只有在函数内部才能进行访问, 称之为局部变量

// 3. 外部变量(outer variable)
// 在函数内部去访问函数之外的变量, 访问的变量称之为外部变量


// 全局变量
var message = "Hello World"

// 在函数中访问 message
function sayHello() {
  // 外部变量
  console.log("sayHello中访问message:", message)

  // 局部变量
  var nickname = "codercgx"

  function hi() {
    console.log("hi function~")
    // message 也是一个外部变量
    console.log("hi 中访问message: ", message)
    // nickname 也是一个外部变量
    console.log("hi中访问nickname: ", nickname)
  }
  hi()
}


sayHello()