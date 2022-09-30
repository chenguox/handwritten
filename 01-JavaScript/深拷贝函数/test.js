function isObject(value) {
  const type = typeof value
  return type !== null && (type === 'object' || type === 'function')
}

function deepClone(originObject, map = new Map()) {
  // 不是对象
  if(!isObject(originObject)) {
    return originObject
  }

  // 处理循环引用
  if(map.has(originObject)) {
    return map.get(originObject)
  }

  
  const newObject = {}
  map.set(originObject, newObject)
  for(const key in originObject) {

    newObject[key] = deepClone(originObject[key], map)
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

