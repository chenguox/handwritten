var str1 = "Hello"
var str2 = "World"
var str3 = "kobe"

// 1. 字符串拼接
// +
var newString = str1 + str2 + str3
console.log(newString)

// concat方法: 链式调用
var newString2 = str1.concat(str2).concat(str3)
var newString3 = str1.concat(str2, str3, "aaa", "bbb")
console.log(newString2)
console.log(newString3)