// 在定义一个 TypeScript 中的函数时
// 返回值类型可以明确的指定，也可以自动进行类型推导

// 自动进行类型推导
function sum(num1: number, num2: number) {
  return num1 + num2
}

// 明确指定
function sum2(num1: number, num2: number): number {
  return num1 + num2
}

export {}