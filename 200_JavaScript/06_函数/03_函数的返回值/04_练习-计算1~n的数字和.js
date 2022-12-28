function sumN(n) {
  // 1. 加对n的判断
  if (n <= 0) {
    console.log(`您传入的${n}是有问题的`)
    return
  }

  // 2. 真正对1~n的数字进行计算
  // 1~n的数字和
  // 1~5 1 2 3 4 5
  var total = 0
  for (var i = 1; i <= n; i++) {
    total += i
  }
  return total
}

var result1 = sumN(5)
var result2 = sumN(10)
console.log(`result1: ${result1}, result2: ${result2}`)

var result3 = sumN(-10)
console.log("result3:", result3)