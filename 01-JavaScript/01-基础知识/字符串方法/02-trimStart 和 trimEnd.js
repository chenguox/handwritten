// 去除一个字符串首尾的空格，我们可以通过 trim 方法，
// 如果单独去除前面或者后面的，ES10中给我们提供了 trimStart 和 trimEnd 方法。

const message = '   Hello World    '
console.log(message.trim()) // Hello World
console.log(message.trimStart()) // Hello World   ：
console.log(message.trimEnd()) //   Hello World
