// 需求： 从 friend 数组获取需要的对象的索引值

const friends = [
  { name: 'why', age: 18 },
  { name: 'kobe', age: 40 },
  { name: 'james', age: 35 },
  { name: 'curry', age: 30 },
]

const findFriend = friends.findIndex(item => item.name === 'james')

console.log(findFriend)
