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