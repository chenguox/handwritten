// 对象的每个属性需要绑定一个 depend 对象，对象存储着要要响应的函数，并具备收集和触发
let reactiveFn = null
class Depend {
  constructor() {
    this.reactiveFns = new Set()
  }

  add() {
    if(!reactiveFn) return
    this.reactiveFns.add(reactiveFn)
  }

  notify() {
    console.log('====', this.reactiveFns)
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

// 设计一个获取 depend 对象的函数, 没有有 depend 对象就为其创建一个
// weakMap, 先拿到对应的对象，再拿对象对应属性的 depend
const rootMap = new WeakMap()
function getDepend(target, key) {
  // 先拿到对应的对象
  let map = rootMap.get(target)
  if (!map) {
    map = new Map()
    rootMap.set(target, map)
  }

  // 再拿对象对应属性的 depend
  let depend = map.get(key)
  if (!depend) {
    depend = new Depend()
    map.set(key, depend)
  }

  return depend
}


// 收集依赖
function watchFn(fn) {
  reactiveFn = fn
  fn()
  reactiveFn = null
}

// vue3
function reactive(obj) {
  return new Proxy(obj, {
    get: function (target, key, receiver) {
      let depend = getDepend(target, key)
      depend.add()
      return Reflect.get(target, key, receiver)
    },
    set: function (target, key, newValue, receiver) {
      Reflect.set(target, key, newValue, receiver)
      let depend = getDepend(target, key)
      depend.notify()
    }
  })
}

// vue2
function reactive2(obj) {
  Object.keys(obj).forEach(key => {
    let value = obj[key]
    Object.defineProperty(obj, key, {
      get: function(){
        const depend = getDepend(obj, key)
        depend.add()
        return value
      },
      set: function(newValue){
        value = newValue
        const depend = getDepend(obj, key)
        depend.notify()
      }
    })
  })

  return obj
}

const objProxy = reactive({
  name: 'aaa',
  age: 18
})

watchFn(function test() {
  console.log('执行收集依赖', objProxy.name)
})


// objProxy.name = 'ccc'
setTimeout(() => {
  objProxy.name = 'bbb'
  objProxy.name = 'ccc'
}, 2000);