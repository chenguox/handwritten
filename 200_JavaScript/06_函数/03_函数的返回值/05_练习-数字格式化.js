// 从服务器拿到很多的数字
var playCount1 = 13687 // 13687
var playCount2 = 5433322 // 543万
var playCount3 = 8766633333 // 87亿

// 10_0000_0000就是1000000000语法糖
// 语法糖的概念: 一种简写或者特殊的写法, 这种写法相对于原有的写法更加的方便或者阅读性更强
// 相比于原来的写法, 有一点点的甜头, 称之为语法糖


// 封装一个工具函数: 对数字进行格式化
function formatCount(count) {
  var result = 0
  if(count >= 10_0000_0000) {
    // 超过 10_0000_0000值进行转换
    result = Math.floor(count / 1_0000_0000) + "亿"
  } else if (count >= 10_0000) {
    result = Math.floor(count / 1_0000) + "万"
  } else {
    result = count
  }
  return result
}


console.log(formatCount(playCount1))
console.log(formatCount(playCount2))
console.log(formatCount(playCount3))