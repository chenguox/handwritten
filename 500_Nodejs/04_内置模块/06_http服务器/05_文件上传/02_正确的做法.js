const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
  // 二进制, 而不是 buffer
  request.setEncoding('binary')

  // 获取 boundary, 后面使用到
  // console.log(request.headers['content-type'])
  const boundary = request.headers['content-type']
    .split('; ')[1]
    .replace('boundary=', '')

  // 客户端传递的数据是表单数据(请求体)
  let formData = ''
  request.on('data', (data) => {
    formData += data
  })

  request.on('end', () => {
    // console.log(formData)
    // 1. 截图从image/jpeg位置开始后面所有的数据
    const imgType = 'image/jpeg'
    const imageTypePosition = formData.indexOf(imgType) + imgType.length
    // 开始截取后面的内容
    let imageData = formData.substring(imageTypePosition)

    // 2. imageData开始位置会有两个空格, 替换为空
    imageData = imageData.replace(/^\s\s*/, '')

    // 3. 替换最后的boundary
    imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`))

    // 4. 将imageData的数据存储到文件中
    fs.writeFile('./bar.jpeg', imageData, 'binary', () => {
      console.log('文件存储成功')
      response.end('文件上传成功~')
    })
  })
})

server.listen(8000, () => {
  console.log('服务器启动成功~')
})
