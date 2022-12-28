// String 类型
var str1 = "8"
var str2 = "1"


// 方式一: 隐式转换
// 字符串相加只会拼接, 不会进行转换
var result1 = str1 + str2
console.log("result1: ", result1, typeof result1)  // "81"  string

// 字符串相减, 会进行隐式转换
var result2 = str1 - str2
console.log("result2: ", result2, typeof result2) // 7 number

// 字符串相乘, 会进行隐式转换
var result3 = str1 * str2
console.log("result3: ", result3, typeof result3) // 8 number

// 方式二: 显示转换

// 字符串
console.log(Number(""))   // 0
console.log(Number("111")) // 111
console.log(Number("   123   "))  // 123
console.log(Number("aaa"))  // NaN

// 布尔值
console.log(Number(true)) // 1
console.log(Number(false)) // 0

// undefine 和 null
console.log(Number(undefined)) // NaN
console.log(Number(null)) // 0
