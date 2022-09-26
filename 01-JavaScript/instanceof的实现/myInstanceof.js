function myInstanceof(father, child) {
  // 1、获取父类函数的原型对象
  let fp = father.prototype
  // 2、获取子类对象的隐式原型
  let cp = child.__proto__

  // 3、不断获取子类对象的原型，知道该原型为父类函数的原型对象，返回 true
  while (cp) {
    if (cp === fp) {
      return true
    }

    cp = cp.__proto__
  }

  // 4、否则返回 false
  return false
}

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

// const p = new Person('小明', 18)

let p = {
  name: 'aaa'
}
// console.log(p instanceof Person);

console.log(myInstanceof(Person, p));