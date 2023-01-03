const obj = {
  name: '小明',
  age: 18,
  hobby: ['篮球','乒乓球']
}

const keys = Object.keys(obj)
console.log(keys) // [ 'name', 'age', 'hobby' ]

const values = Object.values(obj) 
console.log(values) // [ '小明', 18, [ '篮球', '乒乓球' ] ]

// 其他用法
// 1. 数组
const result1 = Object.values(['aaa','bbb','ccc'])
console.log(result1) // [ 'aaa', 'bbb', 'ccc' ]
// 2. 字符串
const result2 = Object.values("abc")
console.log(result2) // [ 'a', 'b', 'c' ]