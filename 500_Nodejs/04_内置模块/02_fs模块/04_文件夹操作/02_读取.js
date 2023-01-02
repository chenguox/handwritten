const fs = require('fs')

// 1. 读取文件夹, 获取到文件夹中文件的字符串
fs.readdir('./test', (err, files) => {
  console.log(files)
  files.forEach((item) => {
    console.log(typeof item) // string
  })
})

// [ 'aaa', 'aaa.txt', 'bbb' ]

// 2. 读取文件夹, 获取到文件夹中文件的信息
fs.readdir(
  './test',
  {
    withFileTypes: true, // withFileTypes设置为 true，则 files 数组会包含 fs.Dirent 对象
  },
  (err, files) => {
    console.log('==============')
    files.forEach((item) => {
      console.log(typeof item) // object

      // 判断是否是文件夹
      if (item.isDirectory()) {
        console.log('item 是一个文件夹: ', item.name)

        fs.readdir(
          `./test/${item.name}`,
          {
            withFileTypes: true,
          },
          (err, files) => {
            console.log(files)
          }
        )
      } else {
        console.log("item 是一个文件: ", item.name)
      }
    })
  }
)
