type MyRecord<Keys extends keyof any, Type> = {
  [P in Keys]: Type
}

// Readonly， Partial和 Pick是同态的，但 Record不是。 因为 Record并不需要输入类型来拷贝属性，所以它不属于同态：

interface IPerson {
  name: string
  age: number
  height?: number
}

type keys = keyof IPerson
// name | age | height
type res = keyof any
// string | number | symbol

type IPersonRecord = MyRecord<"name", IPerson>
type IPersonRecord2 = MyRecord<"name" | "age", string>


export {}