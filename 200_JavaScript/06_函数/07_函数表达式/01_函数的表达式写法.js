// 函数的声明(声明语句)
foo()
function foo() {
  console.log("foo函数被执行了")
}

// 函数的表达式
console.log(message) // undefined
var message = "cgx"

console.log(bar)
// bar()  // bar is not a function
var bar = function() {
  console.log("bar函数被执行了~")
}