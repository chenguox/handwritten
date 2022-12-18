// 情况一: 导入的是 node 提供的内置模块, 直接返回核心模块, 并且停止查找
// const path = require("path")
// const http = require("http")


// 情况二：X是以 ./ 或 ../ 或 /（根目录）开头的
// 第一步：将X当做一个文件在对应的目录下查找；
// 1.如果有后缀名，按照后缀名的格式查找对应的文件
// 2.如果没有后缀名，会按照如下顺序：
// ✓ 1> 直接查找文件X 
// ✓ 2> 查找X.js文件
// ✓ 3> 查找X.json文件
// ✓ 4> 查找X.node文件
// const util = require("./utils/index")
// console.log(util.formatDate())

// 第二步：没有找到对应的文件，将X作为一个目录
// 查找目录下面的index文件
// ✓ 1> 查找X/index.js文件
// ✓ 2> 查找X/index.json文件
// ✓ 3> 查找X/index.node文件
const util = require("./utils")
console.log(util.formatDate())
// ◼ 如果没有找到，那么报错：not found

// 情况三：直接是一个X（没有路径），并且X不是一个核心模块, 会去 node_modules 中查找
const axios = require("axios")
console.log(axios)