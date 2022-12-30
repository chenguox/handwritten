var message = "Hello World"

// 1. 属性: length
console.log(message.length)


// 2. 访问字符串中某个位置的字符
console.log(message[4])
console.log(message.charAt(4))
// 超出
console.log(message[20]) // undefined
console.log(message.charAt(20)) //  


// 3. 字符串的遍历
// for普通遍历
for (var i = 0; i < message.length; i++) {
  console.log(message[i])
}

// for...of的遍历 -> 迭代器
// 目前可迭代对象: 字符串/ 数组
// 对象是不支持 for...of
// String 对象内部是将字符串变成了一个可迭代对象
for(var char of message) {
  console.log(char)
}