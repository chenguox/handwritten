// name/age/height 称之为函数的参数(形参, 形式参数, parmaters)
function printInfo(name, age, height) {
  console.log(`my name is ${name}`)
  console.log(`age is ${age}`)
  console.log(`height is ${height}`)
}

// cgx/18/1.88称之为函数的参数(实参, 实际参数, arguments)
printInfo("cgx", 18, 1.88)
printInfo("kobe", 30, 1.98)

// 另外一个案例也做一个重构
function sum(num1, num2) {
  var result = num1 + num2
  console.log("result: ", result)
}

sum(20, 30)
sum(111, 222)