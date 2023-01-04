const http = require('http')

const server = http.createServer((req, res) => {
  // res: response对象 => Writable可写流
  // 1. 响应数据方式一: write (可写多个, 结束需要调用 end)
  res.write("Hello World!")
  res.write("哈哈哈")

  // 2. 响应数据方式二: end
  res.end("本次写出已经结束~")
})

server.listen(8000, () => {
  console.log('服务器开启成功~')
})