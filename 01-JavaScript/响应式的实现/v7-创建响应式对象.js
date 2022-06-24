// 目前的响应式是针对于obj一个对象的，我们可以创建出来一个函数，针对所有的对象都可以变成响应式对象：

function reactive(obj) {
  return new Proxy(obj, {
    get: function (target, key, receiver) {
      const dep = getDepend(target, key)
      dep.depend()
      return Reflect.get(target, key, receiver)
    },
    set: function (target, key, value, receiver) {
      Reflect.set(target, key, value, receiver)
      const dep = getDepend(target, key)
      dep.notify()
    }
  })
}