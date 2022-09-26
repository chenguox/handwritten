Array.prototype.mySlice = function(start,end){

  const array = this
  start = start || 0
  end = end || 0

  const newArray = []

  for (let index = start; index < end; index++) {
    const element = array[index];
    newArray.push(element)
  }

  return newArray
}

var names = ["aaa", "bbb", "ccc", "ddd"]
var newNames = names.mySlice(1, 3)
console.log('原数组：', names)
console.log('结果：', newNames)