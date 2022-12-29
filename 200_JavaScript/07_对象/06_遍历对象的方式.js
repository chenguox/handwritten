var info = {
  name: 'cgx',
  age: 18,
  height: 1.88,
}

// 对对象进行遍历

// 1. 普通for循环
var infoKeys = Object.keys(info)
for (var i = 0; i < infoKeys.length; i++) {
  var key = infoKeys[i]
  var value = info[key]
  console.log(`key: ${key}, value: ${value}`)
}

// 2. for...in...: 遍历对象
for (var key in info) {
  var value = info[key]
  console.log(`key: ${key}, value: ${value}`)
}

// 对象不支持:  for..of..: 默认是不能遍历对象
// for (var foo of info) {
// }
