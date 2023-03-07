import ArrayStack from './03_实现栈结构-实现接口'

function isValid(s: string): boolean {
  // 1. 创建栈结构
  const stack = new ArrayStack<string>()

  // 2. 遍历s
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    switch (c) {
      case '{':
        stack.push('}')
        break
      case '(':
        stack.push(')')
        break
      case '[':
        stack.push(']')
        break
      default:
        if (c !== stack.pop()) return false
    }
  }

  return stack.isEmpty()
}

console.log(isValid('()'))
console.log(isValid('([]){}'))
console.log(isValid('(]'))

export {}
