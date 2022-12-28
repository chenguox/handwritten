// 方式一: 隐式转换
// 分支语句
var isAdmin = true
var num = 123 // true


// 方式二: 显示转换
console.log(Boolean(num))
console.log(Boolean(undefined))

// 转换有如下的规则:
// 直观上为空的值: 转成 boolean 类型都是 false
// 0 / "" / undefined / null / NaN 
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))

// 直观上不为空的值: 转成 Boolean 类型都是 true

// 注意事项
console.log(Boolean("")) // false
console.log(Boolean("0")) // true