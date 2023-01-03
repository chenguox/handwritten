// Extract 翻译: 提取; 取出

// Extract<Type, Union>

// 作用: 从联合类型中只提取自己要的类型

type IPerson = "name" | "age" | "height"

type IPersonExtract = Extract<IPerson, "name" | "age">

export {}