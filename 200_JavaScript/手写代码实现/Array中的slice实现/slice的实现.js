Array.prototype.gxslice = function (start, end) {
  // 1、保存要处理的数组
  const arr = this

  // 2、默认情况
  start = start || 0
  end = end || arr.length

  // 3、存储处理后的数据
  const newArray = []

  for (let i = start; i < end; i++) {
    newArray.push(arr[i])
  }

  // 4、返回处理的结果
  return newArray
}


var names = ["aaa", "bbb", "ccc", "ddd"]
var newNames = names.gxslice(1, 3)
console.log('原数组：', names)
console.log('结果：', newNames)