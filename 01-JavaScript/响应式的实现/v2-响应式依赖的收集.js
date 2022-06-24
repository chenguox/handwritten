// 如果单纯使用一个数组来管理响应函数是有问题的，我们需要设计一个类，
// 这个类用于管理某一个对象的某一个属性的所有响应式函数，相当于替代了原来的简单 reactiveFns 的数组

class Depend {
  constructor() {
    this.reactiveFns = []
  }

  addDepend(fn) {
    this.reactiveFns.push(fn)
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}