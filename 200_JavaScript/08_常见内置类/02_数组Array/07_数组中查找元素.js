/*
  indexOf方式.
  手动for循环
  数组的find方法
*/

// 1.数组中存放的是原始类型
var names = ['abc', 'cba', 'nba', 'mba']

// indexOf
// 可以找到, 返回对应的索引
// 没有找到, 返回-1
console.log(names.indexOf("nba"))  // 2



// 2. 数组中存放的是对象类型
var students = [
  { id: 100, name: "cgx", age: 18 },
  { id: 101, name: "kobe", age: 30 },
  { id: 102, name: "james", age: 25 },
  { id: 103, name: "aaaaa", age: 22 }
]

// 查找的是id为101的学生信息
// 2.1 自己写一个for循环
var stu = null
for (var i = 0; i < students.length; i++) {
  if(students[i].id === 101) {
    stu = students[i]
    break
  }
}
// 判断上面的算法有没有找到对应的学生
if (stu) {
  console.log("找到了对应的101学生", stu)
} else {
  console.log("没有找到对应的101学生")
}


// 2.2 find 方法: 高阶函数
var students2 = [
  { id: 100, name: "cgx", age: 18 },
  { id: 101, name: "kobe", age: 30 },
  { id: 102, name: "james", age: 25 },
  { id: 103, name: "aaaaa", age: 22 }
]

var stu2 = students2.find(function(item) {
  if (item.id === 101) return true
  // return item.id === 101
})
console.log(stu2)