// Pick 翻译: 选择;捡

// Pick<Type, Keys>

// 作用:  Keys 是一个联合类型,  根据 Keys 从 Type 类型中选择出对应的类型构造成新的类型.

interface IPerson {
  name: string
  age: number
  height?: number
}

type IPersonPick = Pick<IPerson, "name" | "age">
type IPersonPick2 = Pick<IPerson, "name">


export {}