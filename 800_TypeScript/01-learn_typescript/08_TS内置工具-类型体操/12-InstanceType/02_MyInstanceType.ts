type MyInstanceType<T extends new (...args: any[] => any)> = T extends new (...args: any[]) => infer R ? R : never

class Person {}
class Dog {}

const p1: Person = new Person()


// 构造函数的例子
// 通过的创建实例的工具函数时会用到这个InstanceType
function factory<T extends new (...args: any[]) => any>(ctor: T): InstanceType<T> {
  return new ctor()
}

const p2 = factory(Person)
const d = factory(Dog)

export {}