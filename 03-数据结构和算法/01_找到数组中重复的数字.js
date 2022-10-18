// 题目描述
// 找出数组中重复的数字。

// 在一个长度为 n 的数组 nums 里的所有数字都在 0 ~ n-1 的范围内。数组中某些数字是重复的，
// 但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

// 示例：

// 输入：[2, 3, 1, 0, 2, 5, 3]
// 输出：2 或 3

const findRepeatNumber = function(nums) {
  // 定义 hash 表
  const map = new Map() 

  for(const number of nums) {
    // 如果存在这个数字，那么直接结束循环，返回当前数字
    if(map.has(number)) {
      return number
    }

    // 存入表中
    map.set(number, number)
  }
}


// const findRepeatNumber2 = function(nums) {
//   const map = new Map()
//   for(const num of nums) {
//     if(map.has(num)) {
//       return num
//     }

//     map.set(num,num)
//   }
// }


const nums = [3, 1, 0, 2, 5, 3]
console.log(findRepeatNumber(nums))