// Record 翻译: 记录

// Record<Keys, Type>
// 作用: 构造一个对象类型, 这个对象类型的属性名为 Keys, 属性值为 Type

// 简单来说, 遍历 Keys 赋值为 Type 类型

interface IPerson {
  name: string
  age: number
  height?: number
}

type IPersonRecord = Record<"name", IPerson>
type IPersonRecord2 = Record<"name" | "age", string>


export {}