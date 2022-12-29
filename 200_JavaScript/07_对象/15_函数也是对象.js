// 定义原始类型的变量
var name = "cgx"
var age = 18

// 定义对象类型的变量
// 地址 - 指针 - 引用
var obj = {} // 堆内存
var foo = function() {} // 堆内存
function bar() {} // 堆内存


console.log(typeof obj) // object
console.log(typeof foo) // function -> object

// var stu = new Student() // stu是一个Student -> Person

// 引申一些别的知识(了解)
var info = {}
info.name = "aaa"

function sayHello() {}
sayHello.age = 18
console.log(sayHello.age) // 18

function Dog() {

}

// 构造函数上(类上面)添加的函数, 称之为类方法
Dog.running = function() {}
Dog.running()