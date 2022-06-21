function isObject(value) {
  const valueType = typeof value
  return valueType !== null && (valueType === 'object' || valueType === 'function')
}

function deepClone(originValue, map = new WeakMap()) {
  // 判断如果是函数类型, 那么直接使用同一个函数
  if (typeof originValue === 'function') {
    return originValue
  }

  // 不是对象类型，原路返回
  if (!isObject(originValue)) {
    return originValue
  }

  // 如果在 map 中存在，说明循环引用，返回地址即可，不需要克隆
  if (map.has(originValue)) {
    return map.get(originValue)
  }

  // 判断传入的对象是数组, 还是对象
  const newObject = Array.isArray(originValue) ? [] : {}
  // 在 map 存储一份引用
  map.set(originValue, newObject)
  for (const key in originValue) {
    // 将 map 作为第二个参数传递进去
    newObject[key] = deepClone(originValue[key], map)
  }

  return newObject
}

// 测试代码
const obj = {
  name: "why",
  age: 18,
  friend: {
    name: "james",
    address: {
      city: "广州"
    }
  },
}
obj.info = obj

const newObj = deepClone(obj)
console.log(newObj === obj)

obj.friend.name = "kobe"
obj.friend.address.city = "成都"
console.log(newObj)