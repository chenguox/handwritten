// 注意事项一:
// 所有的函数, 如果没有写返回值, 那么默认返回 undefined
function foo() {
  console.log("foo函数被执行~")
}
var result = foo()
console.log("foo的返回值:", result)


// 注意事项二: 
// 我们也可以明确的写上 return
// 写上 return 关键字, 但是后面什么内容都没有的时候, 也是返回 undefined
function bar() {
  console.log("bar 函数被执行~")
  return
}
var result = bar()
console.log("bar的返回值:", result)

// 注意事项三:
// 如果在函数执行到 return 关键字时, 函数会立即停止执行, 退出函数
function baz() {
  console.log("Hello Baz")
  return 
  console.log("Hello World")
  console.log("Hello Why")
}
baz()