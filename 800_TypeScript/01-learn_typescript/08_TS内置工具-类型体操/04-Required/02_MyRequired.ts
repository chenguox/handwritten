type MyRequired<T> = {
  [P in keyof T]-?: T[P]
} 

interface IPerson {
  name: string
  age: number
  height?: number
}

type IPersonRequired =  MyRequired<IPerson>

export {}