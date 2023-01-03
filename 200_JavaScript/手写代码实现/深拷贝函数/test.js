function isObject(value) {
  const type = typeof value
  return type !== null && (type === 'object' || type === 'function')
}

function deepClone(originValue, map = new WeakMap()) {
  if(typeof originValue === 'symbol') {
    return Symbol(originValue.description)
  }

  if(originValue instanceof Set) {
    return new Set([...originValue])
  }

  if(originValue instanceof Map) {
    return new Map([...originValue])
  }

  // 如果不是对象，返回该值
  if(!originValue || typeof originValue === 'function') {
    return originValue
  }

  if(map.has(originValue)) {
    return map.get(originValue)
  }

  const newObject = Array.isArray(originValue) ? [] : {}
  map.set(originValue, newObject)
  for(const key in originValue) {
    newObject[key] = deepClone(originValue[key])
  }

  const symbolKeys = Object.getOwnPropertySymbols(originValue)
  for(const key of symbolKeys) {
    newObject[key] = deepClone(originValue[key])
  }

  return newObject
}


const obj1 = {
  a : 123,
  b : 'abc'
}
obj1.c = obj1

const obj2 = deepClone(obj1)

console.log(obj2)

