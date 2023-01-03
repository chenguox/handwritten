// .d.ts 文件
// 用来做类型的声明, 称之为 [类型声明] 或者 [类型定义]

// 作用: 用来做类型检测, 告知 typescript 我们有哪些类型

type IDType = string | number

interface IPerson {
  name: string
  age: number
}


// typescript 会在哪里查找我们的类型声明
// 1. 内置类型声明
// 2. 外部定义类型声明
// 3. 自己定义类型声明