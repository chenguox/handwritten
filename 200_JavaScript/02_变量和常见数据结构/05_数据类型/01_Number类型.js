// 1. 基本使用
var age = 18
var height = 1.88

// 2. 特殊的数值
var num1 = Infinity
var num2 = 1 / 0
console.log(num1, num2)

// 3. NaN: not a number (不是一个数字)
var result = 3 * "abc"
console.log(result) // NaN
console.log(isNaN(result)) // true

// 4. 进制表示
var num3 = 100 // 十进制
var num4 = 0b100 // 二进制
var num5 = 0o100 // 八进制
var num6 = 0x100 // 十六进制
console.log(num4, num5, num6)  // 4  64  256

// 5. 数字可以表示的范围
var max = Number.MAX_VALUE
var min = Number.MIN_VALUE
console.log(max, min)