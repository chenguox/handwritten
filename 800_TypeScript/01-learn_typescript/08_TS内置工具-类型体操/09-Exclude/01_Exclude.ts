// exclude 翻译: 不包括; 把...排除在外

// Exclude<UnionType, ExcludedMembers>

// 作用: 接收一个联合类型参数, 还有一个要排除的类型参数, 构造一个排除后的类型

type IPerson = "name" | "age" | "height"

type IPersonExclude = Exclude<IPerson, "name">
type IPersonExclude2 = Exclude<IPerson, "name" | "age">

export {}