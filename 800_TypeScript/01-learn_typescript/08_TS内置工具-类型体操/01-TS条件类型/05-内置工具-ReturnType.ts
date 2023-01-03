// 构造一个类型, 这个类型是函数的返回值

// 例子1: 提取 CalcFnType 的返回值类型
type CalcFnType = (num1: number, num2: string) => number

type returnType1 = ReturnType<CalcFnType>

// 例子2: 提取函数 foo 的返回值类型
function foo() {
  return "abc"
}

// 提示: 获取 foo 函数的类型可以使用 typeof foo
type returnType2 = ReturnType<typeof foo>

export {}