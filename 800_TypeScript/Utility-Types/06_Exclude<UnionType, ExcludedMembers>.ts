type T0 = Exclude<'a' | 'b' | 'c', 'a'>
// type T0 = "b" | "c"

type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>
// type T1 = "c"

type T2 = Exclude<string | number | (() => void), Function>
// type T2 = string | number

// 传入一个联合类型和要排除的类型，返回排除后的类型
type Exclude<T, U> = T extends U ? never : T

// 你以为的Exclude可能是这样的：
type c = 'a' | 'b' | 'c' extends 'a' | 'd' ? never : 'a' | 'b' | 'c'
// 其实是这样子的：
type c =
  | ('a' extends 'a' | 'd' ? never : 'a')
  | ('b' extends 'a' | 'd' ? never : 'b')
  | ('c' extends 'a' | 'd' ? never : 'c')
// 这里C的类型是'b' | 'c';相当于A不在B中的类型！所以叫排除B。
