// JavaScript 已经默认提供给了我们更加符合 JavaScript 思维方式(面向对象的思维方式) 的一种创建对象的规则

// 在函数中的this一般指向某一个对象

/**
  如果一个函数被new操作符调用
    1.创建出来一个新的空对象
    2.让this指向这个空对象
    3.执行函数体的代码块
    4.如果没有明确的返回一个非空对象, 那么this指向的对象会自动返回
 */

function coder(name, age, height) {
  this.name = name
  this.age = age
  this.height = height
  this.running = function() {
    console.log("running~")
  }
}

// 在函数调用的前面加 new 关键字(操作符)
var stu1 = new coder("cgx", 18, 1.88)
var stu2 = new coder("kobe", 30, 1.98)
console.log(stu1, stu2)