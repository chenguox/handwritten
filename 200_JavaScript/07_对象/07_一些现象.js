// 1. 现象一: 两个对象的比较
var obj1 = {}
var obj2 = {}
console.log(obj1 === obj2)  // false


// 2. 现象二: 引用的赋值
var info = {
  name: "cgx",
  friend: {
    name: "kobe"
  }
}
var friend = info.friend
friend.name = "james"
console.log(info.friend.name) // james


// 3. 现象三: 值传递
function foo(a) {
  a = 200
}
var num = 100
foo(num)
console.log(num) // 100


// 4. 现象四: 引用传递, 但是在函数中创建了一个新对象, 没有对传入对象进行修改
function foo(a) {
  a = {
    name: "cgx"
  }
}
var obj = {
  name: "obj"
}
foo(obj)
console.log(obj) // { name: 'obj' }


// 5. 现象五: 引用传递, 但是对传入的对象进行修改
function foo(a) {
  a.name = "cgx"
}
var obj = {
  name: "obj"
}
foo(obj)
console.log(obj) // { name: 'cgx' }