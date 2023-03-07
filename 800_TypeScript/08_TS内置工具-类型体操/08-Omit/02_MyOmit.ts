type MyOmit<Type, Keys> = {
  [P in keyof Type as P extends Keys ? never : P]: Type[P]
}

// 1. 全部
// type MyOmit<Type, Keys> = {
//   [P in keyof Type]: Type[P]
// }

// 2. 对 P 进行条件判断从而进行剔除
// P extends Keys ? never : P


interface IPerson {
  name: string
  age: number
  height?: number
}

type IPersonOmit = MyOmit<IPerson, "name">

export {}