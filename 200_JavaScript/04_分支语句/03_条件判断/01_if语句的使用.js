// 案例一: 如果小明考试超过90分, 就可以去游乐场
// 1. 定义一个变量来保存小明的分数
var score = 99
// 2. 如果分数超过90分, 去游乐场
if (score > 90) {
  console.log("去游乐场玩~")
}


// 案例二: 苹果单价5元/斤, 如果购买的数量超过5斤, 那么立减 8 元
// 1. 定义一些变量保存数据
var price = 5
var weight = 7
var totalPrice = price * weight

// 2. 根据购买的重量, 决定是否 -8
if (weight > 5) {
  totalPrice -= 8
}

console.log("总价格: ", totalPrice)

// 案例三: 播放列表 currentIndex
// ["鼓楼", "理想", "阿刁"]
var currentIndex = 2

// 对 currentIndex++ 完操作之后
currentIndex++
if(currentIndex === 3) {
  currentIndex = 0
}