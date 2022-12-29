// 什么是斐波那契数列
// 数列: 1 1 2 3 5 8 13 21 34 55  ... x
// 位置: 1 2 3 4 5 6 7  8  9  10  ... n

// 1. 斐波那契的递归实现
function fibonacci(n) {
  if(n === 1 || n === 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(5))
console.log(fibonacci(10))
console.log(fibonacci(20))


// 2. 斐波那契的for循环实现
function fibonacci2(n) {
  // 特殊的情况(前两个数字)
  if(n === 1 || n === 2) return 1

  // for循环实现
  var n1 = 1
  var n2 = 1
  var result = 0
  for(var i = 3; i <= n; i++) {
    result = n1 + n2
    n1 = n2
    n2 = result
  }
  return result
}

console.log(fibonacci2(5))
console.log(fibonacci2(10))
console.log(fibonacci2(20))

