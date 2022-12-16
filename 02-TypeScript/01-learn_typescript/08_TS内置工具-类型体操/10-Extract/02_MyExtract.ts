// 1. 接收两个参数
// type MyExtract<Type, Union> = Type
// 2. 就这么简单
type MyExtrac<Type, Union> = Type extends Union ? Type : never


type IPerson = "name" | "age" | "height"

type IPersonExtract = MyExtrac<IPerson, "name" | "age">

export {}