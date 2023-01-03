// var date = new Date(1133323232332)
// console.log(date)

// Date对象, 转成时间戳
var date = new Date()
var date2 = new Date("2033-03-03")

// 方法一: 当前时间的时间戳
var timestamp1 = Date.now()
console.log(timestamp1)

// 方法二/三: 将一个date对象转成时间戳
var timestamp2 = date.getTime()
var timestamp3 = date2.valueOf()
console.log(timestamp2, timestamp3)

// 方法四: 了解
console.log(+date)


// 计算这个操作所花费的时间
var startTime = Date.now()
for (var i = 0; i < 100000; i++) {
  console.log(i)
}
var endTime = Date.now()
console.log("执行100000次for循环的打印所消耗的时间:", endTime - startTime)


// 封装一个简单函数
function testPerformance(fn) {
  var startTime = Date.now()
  fn()
  var endTime = Date.now()
  console.log("所消耗的时间:", endTime - startTime)
}