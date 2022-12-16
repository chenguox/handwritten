// type MyPartial<T> = T

// 使用 keyof 获取对象的属性
// 使用关键字 in 可以进行遍历
type MyPartial<T> = {
  [P in keyof T]?: T[P] 
}

interface IPerson {
  name: string
  age: number
  height?: number
}

type IPersonOptional = MyPartial<IPerson>


export {}