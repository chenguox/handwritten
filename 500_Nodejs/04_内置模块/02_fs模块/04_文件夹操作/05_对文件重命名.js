const fs = require('fs')

fs.rename('./aaa.txt', './bbb.txt', data => {
  console.log("重命名结果: ", data)
})