class Person {}

/**
 * 类的作用:
 * 1. 可以创建类对应的实例对象
 * 2. 类本身可以作为这个实例的类型
 * 3. 类也可以当做一个构造签名的函数
 */

const name: string = "aaa"

// 1. 创建实例对象
const p: Person = new Person()

// 2. 作为实例的类型
function printPerson(p: Person) {

}

// 3. 构造签名的函数
function factory(ctor: new () => void) {}
factory(Person)

export {}