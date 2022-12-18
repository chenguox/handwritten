  const path = require("path")

  const filepath ="C://aaa/bbb/ccc.txt"

  
  // 1. 获取文件的父文件夹
  console.log(path.dirname(filepath)) // C://aaa/bbb


  // 2. 获取文件名
  console.log(path.basename(filepath)) // ccc.txt


  // 3. 获取文件扩展名
  console.log(path.extname(filepath)) // .txt