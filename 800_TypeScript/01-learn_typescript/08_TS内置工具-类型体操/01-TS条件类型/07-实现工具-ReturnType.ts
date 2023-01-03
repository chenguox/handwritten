// 实现
// 1. 接收一个类型, 返回一个类型
// type MyReturnType<T> = T
// 2. 接收的类型应该是一个函数类型, 所以使用 extends 进行限制
// type MyReturnType<T extends (...args: any[]) => any> = T
// 3. 对返回的类型也需要进行限制为函数
// type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => any 
// 4. 但是, 我们不是需要传入一个函数,再返回函数, 而是要返回函数的返回值, 所以我们对函数的返回值使用 infer 推导返回值给变量 R, 并利用条件判断返回该值
// type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never


// 测试:
type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never

// 例子1: 提取 CalcFnType 的返回值类型
type CalcFnType = (num1: number, num2: string) => number

type returnType1 = MyReturnType<CalcFnType>

// 例子2: 提取函数 foo 的返回值类型
function foo() {
  return "abc"
}

// 提示: 获取 foo 函数的类型可以使用 typeof foo
type returnType2 = ReturnType<typeof foo>

export {}