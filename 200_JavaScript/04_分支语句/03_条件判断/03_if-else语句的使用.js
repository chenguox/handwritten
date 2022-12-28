// 条件成立, 专属的代码块
// 条件不成立, 专属的代码块

// 案例一: 小明超过90分去游乐场, 否则去上补习班
if (score > 90) {
  console.log('去游乐场玩~')
} else {
  console.log('去上补习班~')
}

// 案例二: 有两个数字, 进行比较, 获取较大的数字
var num1 = 12 * 6 + 7 * 8 + 7 ** 4
var num2 = 67 * 5 + 24 ** 2
console.log(num1, num2)

var result = 0
if (num1 > num2) {
  result = num1
} else {
  result = num2
}
console.log(result)
