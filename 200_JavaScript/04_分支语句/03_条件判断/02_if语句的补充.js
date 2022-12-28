// 补充一:
// 如果if语句对应的代码块, 只有一行代码, 那么{}可以省略
// 案例二: 苹果单价5元/斤, 如果购买的数量超过5斤, 那么立减8元
var price = 5
var weight = 7
var totalPrice = price * weight

if (weight > 5) totalPrice -= 8

console.log("总价格: ", totalPrice)


// 补充二: if (条件判断)
var num = 123 // true
if(num) { // 会将结果转换为布尔值
  console.log("num判断的代码执行")
}