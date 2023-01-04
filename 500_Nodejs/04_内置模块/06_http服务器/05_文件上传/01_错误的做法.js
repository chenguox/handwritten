const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  // 创建 writeable 的 stream
  const writeStream = fs.createWriteStream('./foo.jpeg', {
    flags: 'a+'
  })

  // 客户端传递的数据是表单数据(请求体)
  req.on('data', (data) => {
    console.log(data)
    writeStream.write(data)
  })

  req.on('end', () => {
    // console.log("数据传输完成~")
    // writeStream.close()
    res.end('文件上传成功')
  })
})

server.listen(8000, () => {
  console.log("服务器开启成功~")
})