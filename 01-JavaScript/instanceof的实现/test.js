function myInstanceof(obj, fn) {
  let proto = obj.__proto__

  const prototype = fn.prototype

  while (proto) {
    if (proto === prototype) {
      return true
    }
    proto = proto.__proto__

  }

  return false
}


class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

// const p = new Person('小明', 18)
const p = {
  name: 'aaa'
}

console.log(p instanceof Person);

console.log(myInstanceof(p, Person));