class Person {
  readonly name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

// 类和实例之间的关系(重要)
const p = new Person('cgx', 18)
console.log(p.name, p.age)

// 无法为 "name" 赋值,因为它是只读属性
p.name = 'kobe'
p.age = 20

export {}