// 对于某一个结构的操作: 增删改查(数据库)
var names = ["aaa", "bbb", "ccc"]

// 1. 访问数组中的元素
console.log(names[0])
console.log(names.at(0))

console.log(names[-1]) // undefined
console.log(names.at(-1))  // ccc


// 2. 修改数组中的元素
names[0] = "cgx"
console.log(names)


// 3. 新增数组中的元素(了解)
names[3] = "ddd"
names[10] = "fff"
console.log(names)


// 4. 删除数组中的元素(了解)
delete names[1]
console.log(names)
console.log(names[1])