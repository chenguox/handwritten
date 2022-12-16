type MyNonNullable<Type> = Type extends null | undefined ? never : Type

type IPerson = "name" | "age" | "height" | null | undefined

type IPersonNonNullable = MyNonNullable<IPerson>

export {}