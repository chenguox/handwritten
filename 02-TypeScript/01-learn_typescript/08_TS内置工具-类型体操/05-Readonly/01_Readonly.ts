// Readonly 翻译: 只读的

// 作用: 将对象类型都变为只读的类型

interface IPerson {
  name: string
  age: number
  height?: number
}

type IPersonReadonly = Readonly<IPerson>

export {}