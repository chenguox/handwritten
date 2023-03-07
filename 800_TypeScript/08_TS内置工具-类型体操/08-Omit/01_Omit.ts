// omit 翻译: 省去; 遗漏

// Omit<Type, Keys>

// 作用: 从 Type 中选择出所有属性, 然后删除对应的 Keys(联合类型) 构造出一个类型

interface IPerson {
  name: string
  age: number
  height?: number
}

type IPersonOmit = Omit<IPerson, "name">

export {}