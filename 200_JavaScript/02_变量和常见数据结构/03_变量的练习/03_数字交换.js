// 定义两个变量保存两个数字, 对两个变量中的数字进行交换
var num1 = 10
var num2 = 20

// 方法一: 借助第三个变量
var temp = num1
var num1 = num2
var num2 = temp
console.log("交换后 num1, num2: ", num1, num2)

// 方法二: 不借助第三个变量完成交换(了解, 笔试面试题)
console.log("交换前, num1, num2:", num1, num2)
num1 = num1 + num2 // num1: 30, num2: 20
num2 = num1 - num2 // num1: 30, num2: 10
num1 = num1 - num2 // num1: 20, num2: 10
console.log("交换后, num1, num2:", num1, num2)