// Number 是一个 function
console.log(typeof Number) // function
var num = new Number()

// Math -> 对象
// 就好比: window/obj/console
console.log(typeof Math) // object
// var math = new Math() // 不可以


// 1. Math 对象的属性
console.log(Math.PI)

// 2. Math 对象的方法
var num = 3.55
console.log(Math.floor(num)) // 3
console.log(Math.ceil(num)) // 4
console.log(Math.round(num)) // 4


// 3. 另外的方法
// random: 随机生成 [0, 1)
console.log(Math.random())
// 需求: [5~50)的随机数
// [a, b)
// y = a
// x = b - a
// Math.floor(Math.random() * x) + y
var randomNum = Math.floor(Math.random() * 45) + 5
console.log(randomNum)


// x 的 y 次方
console.log(Math.pow(2, 4))