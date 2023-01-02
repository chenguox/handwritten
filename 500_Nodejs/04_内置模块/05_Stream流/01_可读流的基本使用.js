const fs = require('fs')

// 1. 一次性读取
// 缺点一: 没有办法精准控制从哪里读取, 读取什么位置
// 缺点二: 读取到某一个位置后, 暂停读取, 恢复读取.
// 缺点三: 文件非常大的时候, 多次读取
fs.readFile('./aaa.txt', (err, data) => {
  console.log(data)
})


// 2. 通过流读取文件
// 2.1 创建一个可读流
// start: 从什么位置开始读取
// end: 读取到什么位置后结束(包括end位置字节)
// highWaterMark: 一次性读取字节的长度, 默认是64kb
const readStream = fs.createReadStream('./aaa.txt', {
  start: 0,
  end: 12,
  highWaterMark: 3  
})

readStream.on('data', (data) => {
  console.log(data.toString())

  // 执行暂停操作
  readStream.pause()

  setTimeout(() => {
    // 恢复执行操作
    readStream.resume()
  }, 2000)
})