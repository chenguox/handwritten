function reactive2(obj) {
  Object.keys(obj).forEach(key => {
    let value = obj[key]
    Object.defineProperty(obj, key, {
      get: function () {
        const dep = getDepends(obj, key)
        dep.depend()
        return value
      },
      set: function (newValue) {
        value = newValue
        const dep = getDepend(obj, key)
        value = newValue
        dep.notify()
      }
    })
  })

  return obj
}