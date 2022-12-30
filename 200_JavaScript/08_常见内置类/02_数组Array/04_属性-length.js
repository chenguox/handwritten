var names = ["aaa", "bbb", "ccc", "ddd"]

// 1. 属性 length
// 获取数组的长度 length
console.log(names.length) // 4

// length 属性可写的(扩容)
names.length = 10
console.log(names) // ['aaa', 'bbb', 'ccc', 'ddd', 空属性 × 6]

// 设置的length小于原来的元素个数
names.length = 0
console.log(names) // []


