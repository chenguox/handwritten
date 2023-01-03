type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

interface IPerson {
  name: string
  age: number
  height?: number
}

type IPersonReadonly = MyReadonly<IPerson>

export {}