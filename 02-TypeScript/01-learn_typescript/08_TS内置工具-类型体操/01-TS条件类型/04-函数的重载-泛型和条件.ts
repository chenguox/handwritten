// 利用泛型来统一 num1 和 num2 的类型, 并使用 extends 约束成只能是 string | number
// 利用条件类型做判断, 将返回值的类型确认
function sum<T extends string | number>(num1: T, num2: T) : T extends number ? number : string

function sum(num1: any, num2: any): any {
  return num1 + num2
}

const result1 = sum(10, 20)
const result2 = sum("aaa", "bbb")


export {}