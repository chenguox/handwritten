var date = new Date()

console.log(date)
console.log(date.toISOString())

// 1. 获取想要的时间信息
var year = date.getFullYear()
var month = date.getMonth() + 1
var day = date.getDate()
var hour = date.getHours()
var minute = date.getMinutes()
var second = date.getSeconds()

console.log(year, month, day, hour, minute, second)
// 2023 1 3 11 8 17
console.log(`${year}/${month}/${day} ${hour}:${minute}:${second}`)
// 2023/1/3 11:9:52


// 一周中的第几天
var weekday = date.getDay() 
console.log(weekday) // 2


// 2. 也可以给date设置时间(了解)
date.setFullYear(2033)
// 自动校验
date.setDate(32)
console.log(date) // 2033-02-01T03:25:04.667Z
date.setDate(10) // 2033-02-10T03:25:04.667Z
console.log(date)