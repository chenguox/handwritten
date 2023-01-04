const http = require('http')

const server = http.createServer((req, res) => {
  // 响应状态码
  // 1. 方式一: statusCode
  // res.statusCode = 403

  // 2. 方式二: setHead 响应头
  res.writeHead(401)

  res.end('hello world aaaa')
})

server.listen(8000, () => {
  console.log("服务器开启成功~")
})