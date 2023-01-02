const fs = require('fs')

fs.readFile('./aaa.txt', {
  encoding: 'utf8'
}, (err, data) => {
  if (err) {
    console.log("读取文件错误:", err)
    return
  }

  console.log("读取文件结果:", data)
})

console.log("后续的代码~")