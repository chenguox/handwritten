Array.prototype.myFind = function(fn) {
  for (var i = 0; i < this.length; i++) {
    var isFlag = fn(this[i], i, this)
    if (isFlag) {
      // item = this[i]
      // break
      return this[i]
    }
  }
}

// 测试
var students = [
  { id: 100, name: "aaa", age: 18 },
  { id: 101, name: "bbb", age: 30 },
  { id: 102, name: "ccc", age: 25 },
  { id: 103, name: "ddd", age: 22 }
]

var findStu = students.myFind(function(item, index, arr) {
  // console.log(item)
  return item.id === 101
})
console.log(findStu)