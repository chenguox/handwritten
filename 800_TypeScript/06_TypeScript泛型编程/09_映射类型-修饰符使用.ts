// 映射类型,真正的用途,是在拷贝一份类型的时候,对类型添加对应的修饰符

// 1. readonly 修饰符
// 可以对之前的 MapPerson 添加只读限制

// 2. ?
// 将属性变为可选的

type MapPerson<Type> = {
  readonly [Property in keyof Type]?: Type[Property]
}


interface IPerson {
  name: string
  age: number
  height: number
  address: string
}

type IPersonOptional = MapPerson<IPerson>

const p: IPersonOptional = {

}

export {}

