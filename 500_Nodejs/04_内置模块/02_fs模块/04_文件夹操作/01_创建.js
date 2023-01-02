const fs = require('fs')

// 创建文件夹  directory
fs.mkdir('./ddd', (err) => {
  console.log("创建文件夹失败: ", err)
})