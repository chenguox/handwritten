// 在浏览器中执行的JavaScript代码，如果我们在顶级范围内通过var定义的一个属性，默认会被添加到window对象上
var name = "codercgx"
console.log(window.name) // codercgx

// 但是在node中，我们通过var定义一个变量，它只是在当前模块中有一个变量，不会放到全局中：
var name = "codercgx"
console.log(global.name) // undefine