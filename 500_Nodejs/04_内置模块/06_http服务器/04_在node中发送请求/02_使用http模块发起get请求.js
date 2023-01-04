const http = require('http')

http.get('http://localhost:8000', (res) => {
  // 从可读流中获取数据
  res.on('data', (data) => {
    const dataString = data.toString()
    console.log(dataString)
    const dataInfo = JSON.parse(dataString)
    console.log(dataInfo)
  })
})