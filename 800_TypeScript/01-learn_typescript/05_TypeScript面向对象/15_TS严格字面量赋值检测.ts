interface IPerson {
  name: string
  age: number
}

// 1. 奇怪的现象一
// 定义info, 类型是 IPerson 类型
const info1: IPerson =  {
  name: 'cgx',
  age: 18,

  // 多了一个height属性
  height: 1.88
}
// 这样就没有报错
const obj = {
  name: 'cgx',
  age: 18,

  // 多了一个height属性
  height: 1.88
}
const info2: IPerson = obj

// 2. 奇怪的现象二
function printPerson(person: IPerson) {

}
const kobe = {
  name: "kobe",
  age: 18,
  height: 1.88
}
printPerson(kobe)

// 解释现象
// 第一次创建的对象字面量, 称之为 fresh(新鲜的)
// 对于新鲜的字面量, 会进行严格的类型检测, 必须完成满足类型的需求(不能有多余的属性)

// 第一次是 fresh
const obj2 = {
  name: 'cgx',
  age: 18,

  height: 1.88
}
// 再次赋值不是 fresh, 不会进行严格的类型检测
const p: IPerson = obj2

export {}