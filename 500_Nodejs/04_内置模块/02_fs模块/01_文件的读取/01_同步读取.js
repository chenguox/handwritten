const fs = require('fs')

const result = fs.readFileSync('./aaa.txt', {
  encoding: 'utf-8',
})

console.log(result)

console.log("后续的代码~")