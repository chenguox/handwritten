// 1. 最常见输出的内容的方式 console.log
console.log("Hello World")

const num1 = 20
const num2 = 30
console.log(num1 + num2)

// 2. 清空控制台
console.clear()

// 3. 打印函数的调用栈
setTimeout(() => {
  console.trace()
}, 3000);
