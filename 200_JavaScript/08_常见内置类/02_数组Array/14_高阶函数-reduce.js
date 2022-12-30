var nums = [1, 2, 3, 4, 5]

// 实现数组元素的和
var result = 0
for (var item of nums) {
  result += item
}
console.log(result)


// 使用 reduce 函数
var result2 = nums.reduce(function(preValue, item) {
  return preValue + item
}, 0)
console.log(result2)

// 第一次执行: preValue -> 0 item -> 1
// 第一次执行: preValue -> 1 item -> 2
// 第一次执行: preValue -> 3 item -> 3
// 第一次执行: preValue -> 6 item -> 4
// 第一次执行: preValue -> 10 item -> 5
// 最后一次执行的时候 preValue + item, 他会作为 reduce 的返回值

// initialValue: 初始化值, 第一次执行的时候, 对应的preValue
// 如果initialValue没有传呢?


// reduce 练习
var products = [
  { name: "鼠标", price: 88, count: 3 },
  { name: "键盘", price: 200, count: 2 },
  { name: "耳机", price: 9.9, count: 10 },
]
var totalPrice = products.reduce(function(preValue, item) {
  return preValue + item.price * item.count
}, 0)
console.log(totalPrice)