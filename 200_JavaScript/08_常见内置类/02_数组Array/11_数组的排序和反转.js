var nums = [20, 4, 10, 15, 100, 88]

// sort: 排序
nums.sort(function(item1, item2) {
  // item1 和 item2 进行比较
  // 返回是 整数
  // 谁小谁在前
  return item1 - item2  // 从小到大
  // return item2 - item1  // 从大到小
})

console.log(nums)


// reverse: 反转
var strs = ["aaa", "bbb", "ccc"]
strs.reverse()
console.log(strs)  // [ 'ccc', 'bbb', 'aaa' ]


// 复杂类型的排序
var students = [
  { id: 100, name: "aaa", age: 18 },
  { id: 101, name: "bbb", age: 30 },
  { id: 102, name: "ccc", age: 25 },
  { id: 103, name: "ddd", age: 22 }
]

students.sort(function(item1, item2) {
  return item1.age - item2.age
})

console.log(students)