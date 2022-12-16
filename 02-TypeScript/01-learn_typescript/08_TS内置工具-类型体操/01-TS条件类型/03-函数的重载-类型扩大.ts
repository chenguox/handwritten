// 我们将两个重载签名, 合成一个, 这样实现可以吗?
function sum(num1: string | number, num2: string | number) : string | number

function sum(num1: any, num2: any): any {
  return num1 + num2
}

const result1 = sum(10, 20)
const result2 = sum("aaa", "bbb")

// 错误的做法: 类型的扩大
// 1. 这样不能保证, num1 是同类型,比如同时是 string 或者 number
// 2. 返回值的类型变成了 string | number 这种联合类型

export {}