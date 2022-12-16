// 用于推断某个复杂类型的部分, 简单来说, 就是用来推导泛型参数

// 1. infer 只能出现在 extends 关键字的右侧
// 2. 可以把 infer P 理解成数学上的未知数 x
type ParamsArray<T> = T extends Array<infer P> ? P : T

// 上面的处理可以理解为两步:
// 第一步:
// 传过来的类型用变量T接收, 必须满足 Array<x> 限制, 才返回变量 P , 否则 返回 T

// 第二步:
// 让 ts 去推断 x 的值, 并将结果赋值给比变量 P


type result1 = ParamsArray<string[]>
type result2 = ParamsArray<number[]>

export {}