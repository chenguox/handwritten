// Partial 翻译为: 部分的; 不完全的

// 作用: 将对象类型全部变为可选的

interface IPerson {
  name: string
  age: number
  height?: number
}

type IPersonOptional = Partial<IPerson>

// 最终结果:
// type IPersonOptional = {
//   name?: string | undefined;
//   age?: number | undefined;
//   height?: number | undefined;
// }


export {}