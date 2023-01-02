const fs = require('fs')

// 1. 假设有一段内容(客户端传递过来 http/express/koa)
const content= "hello world, my name is codercgx"

// 2. 文件的写入操作(没有文件会自动创建)
fs.writeFile('./ccc.txt', content, {
  encoding: 'utf8',
  flag: 'a'  // 追加在后面
}, (err) => {
  if (err) {
    console.log("文件写入错误:", err)
  } else {
    console.log("文件写入成功")
  }
})

