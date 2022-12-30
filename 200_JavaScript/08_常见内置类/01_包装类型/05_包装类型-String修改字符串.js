var message = "Hello World"

// 1. 严格的修改字符串, 之前的字符串内部修改掉
message[2] = "a"
console.log(message)


// String 两个方法: (重要)
// toUpperCase: 将所有的字符变成大写
// toLowerCase: 将所有的字符变成小写

var message1 = message.toUpperCase()
console.log("message:", message)
console.log("message1:", message1)

var message2 = message.toLowerCase()
console.log("message2:", message2)
