// 将手动收集依赖，变为代理对象自动收集依赖
let reactiveFn = null
function watchFn(fn) {
  reactiveFn = fn
  // 利用函数的执行自动收集依赖
  fn()
  reactiveFn = null
}

const proxyObj = new proxyObj(obj, {
  get: function (target, key, receiver) {
    const dep = getDepend(target, key)
    dep.addDepend(reactiveFn)
    return Reflect.get(target, key, receiver)
  },
  set: function (target, key, value, receiver) {
    Reflect.set(target, key, value, receiver)
    const dep = getDepend(target, key)
    dep.notify()
  }
})