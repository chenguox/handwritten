// Required 翻译: 必需的

// 作用: 将对象类型全部变为必需的

interface IPerson {
  name: string
  age: number
  height?: number
}

type IPersonRequired =  Required<IPerson>

export {}