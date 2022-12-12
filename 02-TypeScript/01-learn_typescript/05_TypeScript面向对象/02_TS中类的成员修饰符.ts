// 有三个修饰符
// public
// private
// protected

class Person {
  protected name: string
  private age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  // 方法变成私有方法: 只有在类内部才能访问
  private eating() {
    console.log("吃东西", this.age, this.name)
  }
}

const p = new Person('cgx', 18)
// 属性 "name" 受保护, 只能在类 "Person" 及其子类中访问
// console.log(p.name)
// p.name = "kobe"
// 属性 "eating" 受保护, 只能在类 "Person" 及其子类中访问
// p.eating()

// 子类中是否可以访问
class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age)
  }

  studying() {
    console.log("在学习", this.name)
  }
}

const stu = new Student("cgx", 18)