function isObject(value) {
  const valueType = typeof value
  return valueType !== null && (valueType === 'object' || valueType === 'function')
}

function deepClone(originValue) {
  // 判断如果是函数类型, 那么直接使用同一个函数
  if (typeof originValue === 'function') {
    return originValue
  }

  if (!isObject(originValue)) {
    return originValue
  }

  // 判断传入的对象是数组, 还是对象
  const newObject = Array.isArray(originValue) ? [] : {}
  for (const key in originValue) {
    newObject[key] = deepClone(originValue[key])
  }

  return newObject
}

// 测试代码
let s1 = Symbol("aaa")
let s2 = Symbol("bbb")

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
console.log(newObj.s2 === obj.s2)