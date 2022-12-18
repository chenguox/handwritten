const path = require("path")

const path1 = "./aaa/bbb"
const path2 = "../ccc/ddd"
const path3 = "./index.txt"

const finalPath = path.resolve(path1, path2, path3)
// console.log(finalPath)

// path.resolve() 会将一个路径或路径片段的序列解析为一个绝对路径
// /Volumes/codercgx/handwritten/600_Nodejs/04_内置模块/01_Path模块/aaa/ccc/ddd/index.txt


// 如果没有path传递段，path.resolve()将返回当前工作目录的绝对路径
console.log(path.resolve())
// /Volumes/codercgx/handwritten/600_Nodejs/04_内置模块/01_Path模块