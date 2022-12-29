// 函数作为一等(头等)公民

// 1. 函数可以被赋值给变量(函数表达式写法)
var foo1 = function() {
  console.log("foo1函数被执行~")
}
foo1()


// 2. 让函数在变量直接来回传递
var foo2 = foo1
foo2()


// 3. 函数可以作为另一函数的参数
function bar(fn) {
  console.log("fn:", fn)
  fn()
}
bar(foo1)

// 4. 函数作为另一个函数的返回值
function sayHello() {
  function hi() {
    console.log("hi cgx")
  }
  return hi
}

var fn = sayHello()
fn()


// 5. 将函数存储在另外一个数据结构中
var obj = {
  name: "cgx",
  eating: function() {
    console.log("eating")
  }
}
obj.eating()

function bar1() {
  console.log("bar1函数被执行~")
}
function bar2() {
  console.log("bar2函数被执行~")
}
function bar3() {
  console.log("bar3函数被执行~")
}
// 事件总线的封装
var fns = [bar1, bar2, bar3]

// 函数式编程: 使用函数作为头等公民使用函数, 这种编程方式(范式).
// JavaScript 支持函数式编程