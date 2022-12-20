// 使用通过 DefinePlugin 注入的变量
console.log(name)
console.log(age)

// 设置 mode 的值会添加剂 NODE_ENV 上
console.log(process.env.NODE_ENV)