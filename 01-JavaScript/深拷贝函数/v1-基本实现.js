/**
 * 判断值是否是一个对象或者函数
 * @param {*} value 
 * @returns 
 */
function isObject(value) {
  const valueType = typeof value
  return valueType !== null && (valueType === 'object' || valueType === 'function')
}

function deepClone(originValue) {
  // 判断传入的originValue是否是一个对象类型
  if (!isObject(originValue)) {
    // 不是对象，将值原路返回
    return originValue
  }

  const newObject = {}
  for (const key in originValue) {
    newObject[key] = deepClone(originValue[key])
  }

  return newObject
}

// 测试对象
const obj = {
  name: 'cgx',
  age: 18,
  friend: {
    name: 'bbb'
  },
  // say: function () {
  //   return 'Hello World'
  // }
}

const newObj = deepClone(obj)
console.log(newObj);