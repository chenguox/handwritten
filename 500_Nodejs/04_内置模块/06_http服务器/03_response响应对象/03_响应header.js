const http = require('http')

const server = http.createServer((req, res) => {
  // 设置 header 信息: 数据的类型以及数据的编码格式

  // 1. 单独设置某一个header
  // res.setHeader('Content-Type', 'text/plain;charset=utf8;')

  // 2. 和 http status code 一起设置
  res.writeHead(200, {
    'Content-Type': 'application/json;charset=utf8'
  })


  // 真实的数据从数据库获取
  const list = [
    { name: "cgx", age: 18 },
    { name: "kobe", age: 30 }
  ]
  res.end(JSON.stringify(list))
})

server.listen(8000, () => {
  console.log("服务器启动成功")
})