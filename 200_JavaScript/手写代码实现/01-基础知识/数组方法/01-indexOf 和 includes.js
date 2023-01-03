// 判断数组中是否包含某个元素
const names = ['a','b','c','d','e']
const index = names.indexOf('f') 
console.log(index) // -1 不包含
const index2 = names.indexOf(NaN) 
console.log(index2) // -1 不包含

// 判断数组中是否包含某个元素
const names = ['a','b','c','d','e']
// ES7 可以使用 includes 方法
const result1 = names.includes("a")
console.log(result1) // true 包含

// 从索引值2开始查找
const result2 = names.includes('a',2)
console.log(result2) // false 不包含

const result3 = names.includes(NaN)
console.log(result3) // false 非数字不包含