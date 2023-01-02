const http = require('http')

// 1. 创建 server 服务器
const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method

  if (url === '/login') {
    if (method === 'POST') {
      res.end('登录成功~')
    } else {
      res.end('不支持的请求方式, 请检测你的请求方式~')
    }
  }
})

// 2. 开启server服务器
server.listen(8000, () => {
  console.log('服务器开启成功~')
})