// node服务器代理
// webpack => webpack-dev-server
// 这里用 express koa 都行
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()

// 开启一个新的服务器, 将静态资源部署在这台服务器, 静态资源去访问这台服务器, 不会发生跨域问题
// 按照一定的规则, 对url进行处理, 用这台服务器去访问API服务器获取数据
// http://localhost:9000/index.html
app.use(express.static('../client'))

app.use('/api', createProxyMiddleware({
  target: "http://localhost:8000",
  pathRewrite: {
    '^/api': ''
  }
}))

app.listen(9000, () => {
  console.log('express proxy服务器开启成功')
})