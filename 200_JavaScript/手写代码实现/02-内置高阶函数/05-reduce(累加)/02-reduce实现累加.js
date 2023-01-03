// prevValue: 0, item: 10
// prevValue: 10, item: 5
// prevValue: 15, item: 11
const nums = [10, 5, 11, 100, 55]

// var total = nums.reduce(function (prevValue, item) {
//   return prevValue + item
// }, 0)
const total = nums.reduce((prevValue, item) => prevValue + item, 0)

console.log(total)