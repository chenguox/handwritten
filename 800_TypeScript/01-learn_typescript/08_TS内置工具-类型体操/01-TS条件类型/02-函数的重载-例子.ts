// 举个例子: 函数的重载
// 1.1 先编写重载签名
function sum(num1: number, num2: number): number
function sum(num1: string, num2: string): string

// 1.2 编写通用的函数实现
function sum(num1: any, num2: any): any {
  return num1 + num2
}

const result1 = sum(10, 20)
const result2 = sum("aaa", "bbb")

// 上面的例子, 确实能实现我们的要求:
// 1. 传入 number 类型 或者 string 类型
// 2. num1 参数 和 num2 参数的类型要一致


export {}