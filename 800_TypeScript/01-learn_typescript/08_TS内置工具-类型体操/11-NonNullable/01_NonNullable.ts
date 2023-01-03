
// NonNullable<Type>

// 作用: 通过从type中排除null和undefined来构造类型


type IPerson = "name" | "age" | "height" | null | undefined

type IPersonNonNullable = NonNullable<IPerson>

export {}