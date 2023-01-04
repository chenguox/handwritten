const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.headers)
  console.log(req.headers['content-type'])

  // cookie/session/token
  const token = req.headers['authorization']
  console.log(token)

  res.end('查看header的信息~')
})

server.listen(8000, () => {
  console.log('服务器开启成功')
})