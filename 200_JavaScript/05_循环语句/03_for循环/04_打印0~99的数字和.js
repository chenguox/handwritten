var totalCount = 0
for (var i = 0; i < 100; i++) {
  totalCount += i
}
console.log(totalCount)

// 0~99 的奇数和
var totalCount = 0
for (var i = 0; i < 100; i++) {
  if (i % 2 !== 0) {
    totalCount += i
  }
}
console.log('totalCount:', totalCount)

// 算法优化
var totalCount = 0
for (var i = 1; i < 100; i += 2) {
  totalCount += i
}
console.log('totalCount:', totalCount)
