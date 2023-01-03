// 需求：从下面的数组中过滤出偶数
const nums = [10, 5, 11, 100, 55]

// const newNums = nums.filter((item) => {
//   return item % 2 === 0
// })

// 简化：
const newNums = nums.filter(item => item % 2 === 0)

console.log(newNums)