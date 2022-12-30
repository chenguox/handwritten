var nums = [11, 20, 55, 100, 88, 32]

// 过滤所有的偶数, 映射所有偶数的平方, 并且计算他们的和

var total = nums.filter(function(item) {
  return item % 2 === 0
}).map(function(item) {
  return item * item
}).reduce(function(preValue, item) {
  return preValue + item
}, 0)

console.log(total)

var total2 = nums.filter(item => item % 2 === 0)
.map(item => item * item)
.reduce((preValue, item) => preValue + item, 0)
console.log(total2)