const fs = require('fs')

fs.promises
  .readFile('./aaa.txt', {
    encoding: 'utf-8',
  })
  .then((res) => {
    console.log('获取到结果:', res)
  })
  .catch((err) => {
    console.log('发生了错误:', err)
  })

console.log("后续的代码~")