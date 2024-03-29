interface ILength {
  length: number
}

// 1. getLength 没有必要用泛型
function getLength(arg: ILength) {
  return arg.length
}

const length1 = getLength("aaa")
const length2 = getLength(["aaa", "bbb", "ccc"])
const length3 = getLength({ length: 100 })

// 2. 获取传入的内容,这个内容必须有 length 属性
// Type 相当于是一个变量, 用于记录本次调用的类型, 所以在整个函数的执行周期中, 一直保留着参数的类型
function getInfo<Type extends ILength>(args: Type): Type {
  return args
}
const info1 = getInfo("aaaa")
const info2 = getInfo(["aaa", "bbb", "cccc"])
const info3 = getInfo({ length: 100 })

getInfo(1234)
getInfo({})

export {}