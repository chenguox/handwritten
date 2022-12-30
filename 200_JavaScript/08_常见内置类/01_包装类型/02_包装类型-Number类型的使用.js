// Number构造函数 -> window.Number
// var num = 123 // new Number(num)

// 类属性
// Number 中本身是有自己的属性
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
// interger: 整数
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

console.log("======方法=====")
// 对象的方法
// toString(base)
var num = 1000
console.log(num.toString(), typeof num.toString())
console.log(num.toString(2))
console.log(num.toString(8))
console.log(num.toString(16))

console.log(123..toString(2))

// toFixed的使用(重要)
var pi = 3.1415926
console.log(pi.toFixed(3))


console.log("======类的方法=======")
// parseInt
// parseFloat
// 整数: 123
// 浮点数: 小数 123.321 
var num1 = "123.521"
var result1 = Number(num1).toFixed(0)
console.log(result1, typeof result1)
var result2 = Number.parseInt(num1)
console.log(result2, typeof result2)
console.log(Number.parseFloat(num1))

// 因为也挂在 window 对象上面, 所以可以直接使用
console.log(parseInt(num1))
console.log(parseFloat(num1))

console.log(parseInt === Number.parseInt) // true

// 自己也是可以实现的
function GXNumber() {

}
GXNumber.parseInt2 = function() {

}
window.parseInt2 = GXNumber.parseInt2
console.log(window.parseInt2 === GXNumber.parseInt2)