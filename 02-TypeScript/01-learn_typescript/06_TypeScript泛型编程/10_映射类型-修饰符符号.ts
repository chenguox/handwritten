// - : 可以去掉修饰符

type MapPerson<Type> = {
  -readonly [Property in keyof Type]-?: Type[Property]
}

interface IPerson {
  name: string
  age?: number
  readonly height: number
  address?: string
}

type IPersonRequired = MapPerson<IPerson>

const p: IPersonRequired = {
  name: "cgx",
  age: 18,
  height: 1.99,
  address: "广州市"
}

export {}