function myNew(fn, ...args) {
  const obj = {}
  obj.__proto__ = fn.prototype
  this = obj
  fn.apply(this, args)
  return obj
}

// 测试代码
function Person(name, age) {
  this.name = name
  this.age = age
}

const p = new Person('小明', 18)
console.log(p);
console.log(p.__proto__);

const p2 = myNew(Person, '小明', 18)
console.log(p2);
console.log(p2.__proto__);