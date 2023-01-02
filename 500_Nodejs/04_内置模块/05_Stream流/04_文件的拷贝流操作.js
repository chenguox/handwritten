const fs = require('fs')

// 1. 方式一: 一次性读取和写入文件
fs.readFile('./aaa.txt', (err, data) => {
  console.log(data)
  fs.writeFile('./ddd.txt', data, () => {
    console.log('写入文件成功')
  })
})

// 2. 方式二: 创建可读流和可写流
const readStream = fs.createReadStream('./aaa.txt')
const writeStream = fs.createWriteStream('./eee.txt')

readStream.on('data', (data) => {
  writeStream.write(data)
})

readStream.on('end', () => {
  writeStream.close()
})

// 3. 在可读流和可写流之间建立一个管道
const readStream2 = fs.createReadStream('./aaa.txt')
const writeStream2 = fs.createWriteStream('./fff.txt')
readStream2.pipe(writeStream2)