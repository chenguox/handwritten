var message = "0123456789abcd"

// 获取子字符串
// 1. slice
console.log(message.slice(3, 7)) // 3456
console.log(message.slice(3, -1)) // 3456789abc
console.log(message.slice(3)) // 3456789abcd


// 2. substr
console.log(message.substr(3, 7)) // 3456789 (从索引3开始, 截取7个数字)
console.log(message.substr(3, -1)) // 空
console.log(message.substr(3)) // 3456789abcd