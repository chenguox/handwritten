// 使用一种数据结构来管理不同对象的不同依赖关系
// WeakMap ---- (obj -> map)
// Map ---- (key -> depend)

const targetMap = new WeakMap()
function getDepend(obj, key) {
  // 根据对象获取 map
  let map = targetMap.get(obj)
  if (!map) {
    map = new Map()
    targetMap.set(obj, map)
  }

  // 根据 key 获取对应的 Depend
  let depend = map.get(key)
  if (!depend) {
    depend = new Depend()
    map.set(key, depend)
  }

  return depend
}

// 就可以根据对象获取对应的depend
const proxyObj = new Proxy(obj, {
  get: function (target, key, receiver) {
    return Reflect.get(target, key, receiver)
  },
  set: function (target, key, value, receiver) {
    Reflect.set(target, key, value, receiver)
    const dep = getDepend(target, key)
    dep.notify()
  }
})