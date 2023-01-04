const http = require('http')

// 获取参数: body参数
const server = http.createServer((req, res) => {
  req.setEncoding('utf-8')

  // request 对象本质是上一个readable可读流
  let isLogin = false
  req.on('data', (data) => {
    const dataString = data  // Buffer => setEncoding('utf-8')
    console.log(dataString) // JSON 
    const loginInfo = JSON.parse(dataString)
    if (loginInfo.name === 'codercgx' && loginInfo.password === '123456') {
      isLogin = true
    } else {
      isLogin = false
    }
  })

  req.on('end', () => {
    if (isLogin) {
      res.end('登录成功, 欢迎回来~')
    } else {
      res.end('账号或者密码错误, 请检测登录信息~')
    }
  })
}) 

server.listen(8000, () => {
  console.log("服务器启动成功~")
})