// 1. 创建数组的方式
var names = ["aaa", "bbb", "ccc", "ddd"]

var product1 = { name: "苹果", price: 10 }
var products = [
  { name: "鼠标", price: 98 },
  { name: "键盘", price: 100 },
  { name: "西瓜", price: 20 },
  product1
]

// 2. 创建方式二: 类Array
var arr1 = new Array()
var arr2 = new Array("aaa", "bbb", "ccc")
console.log(arr1, arr2)


// 传入了一个数字, 它默认会当成我们要创建一个对应长度的数组
var arr3 = new Array(5) // [empty*5]
console.log(arr3, arr3[0])
var arr4 = [5]


// 3. 通过索引访问元素
console.log(names[0]) // 第一个元素
console.log(names[names.length - 1]) // 最后一个元素