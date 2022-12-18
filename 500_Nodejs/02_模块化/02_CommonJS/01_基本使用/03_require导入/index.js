// 1. 直接获取导出的对象, 从对象中获取属性 
// const util = require('./util')
// console.log(util.name)
// console.log(util.formatDate())

// 2. 导入对象之后, 直接对其进行解构
const { name, formatDate } = require('./util')
console.log(name)
console.log(formatDate())

