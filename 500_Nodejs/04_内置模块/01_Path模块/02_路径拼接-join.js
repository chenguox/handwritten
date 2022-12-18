const path = require("path")

const path1 = "/aaa/bbb"
const path2 = "../ccc/ddd/index.txt"

// 直接拼接
console.log(path1 + path2)  // /aaa/bbb../ccc/ddd/index.txt


// path.join 函数
// 对路径拼接, 同时针对不同的操作系统使用不同的分隔符
console.log(path.join(path1, path2)) // /aaa/ccc/ddd/index.txt