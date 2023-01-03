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

const dep = new Depend()

function watchFn(fn) {
  dep.addDepend(fn)
}

const obj = {
  name: 'abc',
  age: 18
}
const proxyObj = new Proxy(obj, {
  get: function (target, key, receiver) {
    return Reflect.get(target, key, receiver)
  },
  set: function (target, key, value, receiver) {
    Reflect.set(target, key, value, receiver)
    dep.notify()
  }
})
function objFn() {
  console.log('---objFn 执行了----');
}
watchFn(objFn)
proxyObj.name = 'bbb'
proxyObj.name = 'ccc'