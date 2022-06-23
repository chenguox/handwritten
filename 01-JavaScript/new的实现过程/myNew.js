function myNew(fn, ...args) {
  // 1、创建一个空对象
  const obj = {}

  // 2、对象的隐式原型指向函数的显示原型
  obj.__proto__ = fn.prototype

  // 3、执行函数体代码
  fn.apply(obj, args)

  // 4、返回对象
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