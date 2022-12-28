// 需求: 封装一个函数, 函数可以实现x的n次方法

// 乘方
function pow1(x, n) {
  return x ** n
}

// console.log(pow1(2, 3))
// console.log(pow1(3, 3))

// console.log(Math.pow(2, 3))
// console.log(Math.pow(3, 3))

// 一. for循环实现方式
// x² = x * x
// x³ = x * x * x
function pow2(x, n) {
  var result = 1
  for(var i = 0; i < n; i++) {
    result *= x
  }
  return result
}

console.log(pow2(2, 3))
console.log(pow2(3, 3))


// 二. 递归实现方式(必须有一个结束条件)
// 缺点: 性能是比较低(占用过多的栈内存)
// 有点: 写出来的代码非常简洁
function pow(x, n) {
  if(n === 0) return 1
  return x * pow(x, n - 1)
}

console.log(pow(2, 3))
console.log(pow(3, 3))