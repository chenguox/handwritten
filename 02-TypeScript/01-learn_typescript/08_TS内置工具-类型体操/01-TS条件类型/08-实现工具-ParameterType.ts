// 需求: 实现一个提取函数参数类型的工具
type MyParameterType<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never

type CalcFnType = (num1: number, num2: string) => number


type CalcParameterType = MyParameterType<CalcFnType>

export {}