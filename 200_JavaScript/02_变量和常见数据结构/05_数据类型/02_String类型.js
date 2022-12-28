// 1. 基本使用
var name = "codercgx"
var address = "广州市"
var intro = "认真是一种可怕的力量!"

// 2. 别的引号的使用
// 单引号
var message1 = 'Hello World'
// 双引号
var message2 = "Hello World"
// 反引号(ES6新增的语法)
// ${变量/表达式}
var message3 = `Hello World, ${name}, ${2 + 3}`

// 3. 转义字符: 字符串本身中包含引号
var message4 = 'my name is "coderwhy"'
console.log(message4)

var message5 = 'my name \\ \'\' is "coderwhy"'
console.log(message5)

// 4. <字符串>本身有的方法和属性
var message = "Hello World"
console.log(message.length)

// 字符串操作
var nickname = "codercgx"
var info = "my name is "
var infoStr = info + nickname
var infoStr2 = `my name is ${nickname}` // 推荐(babel)
console.log(infoStr, infoStr2)