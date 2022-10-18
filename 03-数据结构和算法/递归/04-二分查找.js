// 二分查找，是在一个有序的序列里查找某一个值，与小时候玩的猜数字游戏非常相啦：

// A: 0 ~ 100 猜一个数字
// B: 50
// A: 大了
// B: 25
// A: 对头，就是25

// 因此，思路也就非常清楚了，这里有递归和非递归两种写法，先说下递归的方法吧：

// 设定区间,low和high
// 找出口： 找到target，返回target；
// 否则寻找，当前次序没有找到，把区间缩小后递归

// 接下来，使用循环来做一下二分查找，其实思路基本一致：


const number = []

for(let i = 1; i <= 10; i++) {
  // const num = Math.floor(Math.random() * 10)
  number.push(i)
}

console.log(number)

function binarySearch(arr, target, startIndex, endIndex) {
  const length = arr.length
  if(!length) return -1

  startIndex = startIndex || 0
  endIndex = endIndex || length - 1

    // 结束递归
    if(startIndex >= endIndex) return -1

  console.log('范围：', startIndex, endIndex)
  const midIndex = Math.floor((startIndex + endIndex) / 2)
  const midValue = arr[midIndex]
  console.log('中间索引：', midIndex, '中间值：', midValue)

  if(target < midValue) {
    binarySearch(arr, target, startIndex, midIndex - 1)
  } else if(target > midValue){
    binarySearch(arr, target, midIndex + 1, endIndex)
  } else {
    return midIndex
  }
}

binarySearch(number, 3)