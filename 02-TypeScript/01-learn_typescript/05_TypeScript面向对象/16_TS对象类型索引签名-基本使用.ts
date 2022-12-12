// 正常对一个对象进行类型校验
interface IPerson {
  name: string
  age: number
  height: number
}

const p: IPerson = {
  name: 'cgx',
  age: 18,
  height: 1.88
}

// console.log(p.address)


// 1. 索引签名的理解
interface InfoType {
  // 索引签名: 可以通过字符串索引,去获取一个值,这个值也是字符串
  [key: string]: string
}

function getInfo(): InfoType {
  const abc: any = "hahah"
  return abc 
}

const info = getInfo()
const name = info["name"]
// console.log(info, name)
console.log(name, info.age, info.address)


// 2. 索引签名的案例
interface ICollection {
  [index: number]: string
  length: number
}

function printCollection(collection: ICollection) {
  for(let i = 0; i < collection.length; i++) {
    const item = collection[i]
    console.log(item.length)
  }
}

const array = ['aaa', 'bbb', 'ccc']
const tuple: [string, string] = ['ddd', 'eee']
printCollection(array)
printCollection(tuple)



export {}