const http = require('http')

// 1. 创建 server 服务器
const server = http.createServer((req, res) => {
  // request 对象中包含哪些信息?
  // 1. url 信息
  console.log(req.url)
  // 2. method 信息(请求方式)
  console.log(req.method)
  // 3. headers信息(请求信息)
  console.log(req.headers)

  res.end('hello world')
})

// 2. 开启server服务器
server.listen(8000, () => {
  console.log('服务器开启成功~')
})