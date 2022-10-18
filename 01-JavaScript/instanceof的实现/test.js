function myInstanceof(o, c) {
  let _proto = o.__proto__

  const _prototype = c.prototype

  while(_proto) {
    if(_proto === _prototype) {
      return true
    }
    _proto = _proto.__proto__
  }

  return false
} 



class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const p = new Person('aaa', 18)

console.log(p instanceof Person)
console.log(myInstanceof(p, Person))