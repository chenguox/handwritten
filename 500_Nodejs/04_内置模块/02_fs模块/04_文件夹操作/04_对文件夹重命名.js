const fs = require('fs')

fs.rename('./aaa', './bbb', (err) => {
  console.log("重命名结果: ", err)
})

