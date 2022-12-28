// 1. 如果是自己 自增 或 自减, 那是没有区别的
var currentIndex = 5
++currentIndex
console.log(currentIndex)
currentIndex--
console.log(currentIndex)

// 2. 自增和自减表达式本身又在其他的表达式中, 那就有区别
var count1 = 5 
var result1 = 100 + count1++  // 先计算了表达式, 再自增
console.log("count1:", count1)
console.log("result1:", result1)

var count2 = 5
var result2 = 100 + ++count2
console.log("count2:", count2)
console.log("result2:", result2)
