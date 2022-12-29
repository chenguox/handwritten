// 1. 作用域的理解:
// message 在哪一个范围内可以被使用, 称之为 message 的作用域

// 全局变量: 全局作用域
var message = "Hello World"
if (true) {
  console.log(message)
}
function foo() {
  console.log("在foo中访问", message)
}
foo()

console.log("========")

// 2. ES5 之前是没有块级作用域(var 定义的变量是没有块级作用域)
{
  var count = 100
  console.log("在代码块中访问count:", count)
}
console.log("在代码块外面访问count:", count)
// for 循环的代码块也是没有自己的作用域
for (var i = 0; i < 3; i++) {
  var foo = "foo"
}
console.log("for循环外面访问foo:", foo)
console.log("for循环外面访问i:", i) // 3

console.log("========")

// 3. ES5 之前函数代码块是会形成自己的作用域
// 意味着在函数内部定义的变量外面是访问不到的
function test() {
  var bar = "bar"
}
test()
// console.log("test函数外面访问bar:", bar)

// 函数有自己的作用域: 函数内部定义的变量只有函数内部能访问到
function sayHello() {
  var nickname = "kobe"
  console.log("sayHello函数的内部:" nickname)

  function hi() {
    console.log("hi function~")
    console.log("在hi函数中访问nickname:", nickname)
  }
  hi()
}
sayHello()
// console.log("sayHello外卖访问nickname:", nickname)