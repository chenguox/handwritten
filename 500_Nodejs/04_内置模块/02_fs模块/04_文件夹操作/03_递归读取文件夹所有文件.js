const fs = require('fs')

function readDirectory(path) {
  fs.readdir(
    path,
    {
      withFileTypes: true,
    },
    (err, files) => {
      files.forEach((item) => {
        if (item.isDirectory()) {
          readDirectory(`${path}/${item.name}`)
        } else {
          console.log('获取到文件: ', item.name)
        }
      })
    }
  )
}

readDirectory('./test')
