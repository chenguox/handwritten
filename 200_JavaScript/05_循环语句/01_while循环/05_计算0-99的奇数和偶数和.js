// 如何判断一个数字是奇数还是偶数
var num = 120
if(num % 2 !== 0) { // 奇数
  console.log("num 是一个奇数")
}


// 计算0~99的奇数和
// var count = 0
// var totalCount = 0
// while (count < 100) {
//   if(count % 2 !== 0) {
//     totalCount += count
//   }
//   count++
// }
// console.log("totalCount:", totalCount)

// 计算0~99的偶数和
// var count = 0
// var totalCount = 0
// while (count < 100) {
//   if(count % 2 === 0) {
//     totalCount += count
//   }
//   count++
// }
// console.log("所有的偶数和:", totalCount)

// 算法优化
var count = 0
var totalCount = 0
while (count < 100) {
  totalCount += count
  count += 2
}
console.log("所有的偶数和:", totalCount)