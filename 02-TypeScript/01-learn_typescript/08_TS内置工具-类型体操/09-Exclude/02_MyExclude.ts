// 1. 接收两个参数: 联合类型和排除类型
// type MyExclude<UnionType, ExcludeType> = any
// 2. 对 UnionType 使用 extends, 拿出来一个个和 ExcludeType 比较 
// UnionType extends ExcludeType
// 3. 如果是 ExcludeType 中存在的, 为 true, 是不要的, 应为 never
// UnionType extends ExcludeType ? never : UnionType

type MyExclude<UnionType, ExcludeType> = UnionType extends ExcludeType ? never : UnionType

type IPerson = "name" | "age" | "height"

type IPersonExclude = MyExclude<IPerson, "name">
type IPersonExclude2 = MyExclude<IPerson, "name" | "age">

export {}