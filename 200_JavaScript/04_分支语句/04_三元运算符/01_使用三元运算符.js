// 案例一: 比较两个数字
var num1 = 10
var num2 = 20

var result = num1 > num2 ? num1 : num2
console.log(result)


// 案例二: 给变量赋值一个默认值(了解)
var info = {
  name: "cgx"
}
var obj = info ? info : {}
console.log(obj)

// 案例三: 让用户输入一个年龄, 判断是否成年人
var age = "18"
age = Number(age)
var message = age >= 18 ? "成年人" : "未成年人"
console.log(message)