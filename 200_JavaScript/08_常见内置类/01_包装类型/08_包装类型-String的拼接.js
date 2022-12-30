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


// 2. 删除首尾的空格
console.log("    cgx    aaa    ".trim())


// 3. 字符串切割split
var message = "aaa-bbb-ccc-ddd"
var items = message.split("-")
console.log(items)

// 4. 将元素拼接成字符串
var newMessage = items.join("*")
console.log(newMessage)