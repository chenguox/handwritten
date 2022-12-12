// 假设我们有一个 IPerson, 想要拷贝一个份 IPerson => NewPerson
interface IPerson {
  name: string
  age: number
}
// 但是, 不是手动拷贝实现
// interface NewPerson {
//   name: string
//   age: number
// }


// TypeScript 提供了隐射类型: 函数
// 映射类型不能使用 interface 定义, 使用 type 定义

// 拷贝 Person 的工具
// Type = IPerson
// keyof = "name" | "age"
type MapPerson<Type> = {
  // 索引类型依次进行使用
  [aaa in keyof Type]: Type[aaa]
  // 对 IPerson 执行完后
  // name: string
  // age: number
}

// 拷贝一份 IPerson
type NewPerson = MapPerson<IPerson>

export {}