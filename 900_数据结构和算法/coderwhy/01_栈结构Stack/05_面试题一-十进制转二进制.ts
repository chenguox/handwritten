import ArrayStack from './03_实现栈结构-实现接口'

function decimalToBinary(decimal: number): string {
  // 1. 创建一个栈，用于存放余数
  const stack = new ArrayStack<number>()

  // 2. 使用循环
  while (decimal > 0) {
    const result = decimal % 2
    stack.push(result)

    decimal = Math.floor(decimal / 2)
  }

  // 3. 所有的余数都已经放在 stack 中，依次取出即可。
  let Binary = ''
  while (!stack.isEmpty()) {
    Binary += stack.pop()
  }

  return Binary
}

console.log(decimalToBinary(35)) // 100011
