// 问题一：如果函数中有用到两次key，比如name，那么这个函数会被收集两次；
// 问题二：我们并不希望将添加reactiveFn放到get中，以为它是属于Dep的行为；
const reactiveFn = null
class Depend {
  constructor() {
    // 避免重复
    this.reactiveFns = new Set()
  }

  depend() {
    if (reactiveFn) {
      // 添加响应式函数
      this.reactiveFns.add(reactiveFn)
    }
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

function watchFn(fn) {
  reactiveFn = fn
  fn()
  reactiveFn = null
}

const proxyObj = new proxyObj(obj, {
  get: function (target, key, receiver) {
    const dep = getDepend(target, key)
    dep.addDepend()
    return Reflect.get(target, key, receiver)
  },
  set: function (target, key, value, receiver) {
    Reflect.set(target, key, value, receiver)
    const dep = getDepend(target, key)
    dep.notify()
  }
})