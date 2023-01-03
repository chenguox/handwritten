// 需求： 从数字中找到需要的数字
const nums = [10, 5, 11, 100, 55]

// const item = nums。find(item => {
//   return item === 11
// })

// 简化
const item = nums.find(item => item === 11)

console.log(item)



// 需求： 从 friend 数组获取需要的对象

const friends = [
  { name: 'why', age: 18 },
  { name: 'kobe', age: 40 },
  { name: 'james', age: 35 },
  { name: 'curry', age: 30 },
]

const friendIndex = friends.find(item => item.name === 'james')

console.log(friendIndex)