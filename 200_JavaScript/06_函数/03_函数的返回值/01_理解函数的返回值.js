// 理解函数的返回值
function sayHello(name) {
  console.log(`Hi ${name}`)
}

var foo = sayHello("Kobe")
console.log("foo:", foo)
// Hi Kobe
// foo: undefined


// 函数的具体返回值
function sum(num1, num2) {
  var result = num1 + num2
  return result
}

var total = sum(20, 30)
console.log("total: ", total)