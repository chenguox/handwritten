var names = ["aaa", "bbb", "ccc", "ddd"]

// 1. slice 方法: 不会修改原数组
// 和 splice 有区别的: splice 修改原有数组
// start: 从什么位置开始
// end: 结束位置, 不包含 end 本身
var newNames = names.slice(2, 4)
console.log(newNames)


// 2. concat 方法, 将多个数组拼接在一起
var names1 = ["aaa", "bbb"]
var names2 = ["ccc", "ddd"]
var names3 = ["eee", "fff"]
var newNames2 = names1.concat(names2, names3)
console.log(newNames2)


// 3. join方法: 字符串split
console.log(names.join("-"))