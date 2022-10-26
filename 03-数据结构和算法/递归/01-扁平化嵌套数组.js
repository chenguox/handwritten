const arr = [[2],[[2,3],[2]],3,4]

Array.prototype.myFlat = function(){
  // 获取要处理的数组
  let arr = this
  let newArr = []

  // 对数组进行遍历
  arr.forEach(item=>{
    // 判断获取到的数组元素是否是一个数组
    if(Array.isArray(item)){
      // 如果是一个数组，那么递归
      newArr = newArr.concat(item.myFlat())
    }else{
      // 不是数据，将该元素放入新数组
      newArr.push(item)
    }
  })

  return newArr
}

console.log(arr.myFlat())


arr.myFlat()
// [2, 2, 3, 2, 3, 4]


