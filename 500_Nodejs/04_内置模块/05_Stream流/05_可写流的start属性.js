// 从第5个开始写入
const fs = require('fs')

const writeStream = fs.createWriteStream('./ddd.txt', {
  // mac上面是没有问题
  // flags: 'a+',
  // window上面是需要使用 r+
  flags: 'r+',
  start: 5
})

writeStream.write('my name is cgx')
writeStream.close()