type MyPick<Type, Keys extends keyof Type> = {
  [P in Keys]: Type[P]
}

interface IPerson {
  name: string
  age: number
  height?: number
}

type IPersonPick = MyPick<IPerson, "name" | "age">

export {}