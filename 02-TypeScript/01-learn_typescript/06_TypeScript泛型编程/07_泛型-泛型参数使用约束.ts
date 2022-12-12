// 传入的 key 类型, obj 当中 key 的其中之一
interface IPerson {
  name: string
  age: number
}

// 使用 keyof 关键字  => "name" | "age"
// 本质上就是获取到 IPerson 的所有 key 组成的联合类型
type IPersonKeys = keyof IPerson


/**
 * 
 * @param obj 对象
 * @param key 属性值
 */
function getObjectProperty<O, K>(obj: O, key: K) {
  return obj[key]
}

// 要确保 key 一定是 obj 对象中的 key, 可以使用 keyof 获取, 再使用 extends 进行约束
function getObjectProperty2<O, K extends keyof O>(obj: O, key: K) {
  return obj[key]
}

const info = {
  name: 'cgx',
  age: 18,
  height: 1.88
}

const name = getObjectProperty2(info, "name")
const address = getObjectProperty2(info, "address")

export {}