// 1. 创建 Buffer 的方式一
const buf = new Buffer('hello')
console.log(buf)


// 2. 创建 Buffer 的方式二
const buf2 = Buffer.from('world')
console.log(buf2)


// 3. 创建 Buffer (字符串中包含中文)
const buf3 = Buffer.from('你好啊hh')
console.log(buf3)
console.log(buf3.toString())


// 4. 手动指定的 Buffer 创建过程的编码
// 编码操作
const buf4 = Buffer.from('哈哈哈', 'utf16le')
console.log(buf4)
// 解码操作
console.log(buf4.toString('utf16le'))