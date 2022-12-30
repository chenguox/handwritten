var names = ["aaa", "bbb", "ccc", "ddd", "eee"]

// 1. 在数组的尾部添加和删除元素
// push方法
names.push("fff", "ggg")
console.log(names)
// pop方法
names.pop()
names.pop()
console.log(names)


// 2. 在数组的头部添加和删除元素
// unshift 方法
names.unshift("111", "222")
console.log(names)
// shift 方法
names.shift()
names.shift()
console.log(names)

console.log("===========================")

// 3. 在任意位置添加/删除/替换元素
var content = ["aaa", "bbb", "ccc", "ddd", "eee"]
// splice 方法
// 参数一: start, 从什么位置开始操作元素
// 参数二: deleteCount, 删除元素的个数

// 3.1 删除元素
content.splice(1, 2)
console.log(content)
//  ['aaa', 'ddd', 'eee']

// 3.2 新增元素
// deleteCount: 0, 后面可以添加新的元素
content.splice(1, 0, "fff", "ggg")
console.log(content)
//  ['aaa', 'fff', 'ggg', 'ddd', 'eee']

// 3.3 替换元素
content.splice(1, 2, "bbb", "ccc")
console.log(content)