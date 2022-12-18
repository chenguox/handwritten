// 给程序输入内容
// 比如: 执行 webpack.config.js 文件, 输入参数 env=development
// node ./webpack.config.js env=development

// 例子: 在控制台传入 name=codercgx 和 age=18
// node 02_控制台输入.js name=codercgx age=18

// 获取传入的参数
// process 是 node 的内置对象, 包含很多信息(版本、操作系统等), 其中参数在 argv 属性中
const arg1 = process.argv[2]
const arg2 = process.argv[3]

console.log(arg1, arg2)
// name=codercgx age=18