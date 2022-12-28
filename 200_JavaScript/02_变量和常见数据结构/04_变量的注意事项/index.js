// 注意事项一: 如果一个变量未声明就直接使用, 那么会直接报错
var currentAge = age
console.log(message)

// 注意事项二: 如果一个变量有声明, 但是没有赋值操作, 那么默认值就是 undefined
var info
console.log(info)

// 注意事项三: 在 JavaScript 中也可以不使用 var 在全局声明一个变量(不推荐)
// 如果不使用 var 来声明一个变量, 也是可以声明成功的, 并且这个变量会被加入 window 对象
address = "广州市"
console.log(address)