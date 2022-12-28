// 因为 ECMAScript 的类型系统是松散的，所以需要一种手段来确定任意变量的数据类型。

// String
var info = "cgx"
console.log(typeof info) // string (表示值为字符串)

// Number
var num = 123
console.log(typeof num) // number (表示值为数值)

// Boolean
var isShow = true
console.log(typeof isShow) // boolean (表示值为布尔值)

// undefined
var ud = undefined
console.log(typeof ud) // undefined (表示为未定义)

// null
var nl = null
var obj = { name: "codercgx" }
console.log(typeof nl) // object (表示为对象)
console.log(typeof obj) // object (表示为对象)

// function
var fn = function() {}
console.log(typeof fn) // function (表示为函数)

// symbol
// symbol


// 你可能还会遇到另一种语法：typeof(x)，它与 typeof x 相同； 
// typeof是一个操作符，并非是一个函数，()只是将后续的内容当做一个整体而已；