interface CatInfo {
  age: number
  breed: string
}

type CatName = 'miffy' | 'boris' | 'mordred'

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
}

cats.boris
// const cats: Record<CatName, CatInfo>

// 源码
type Record<K extends keyof any, T> = {
  [P in K]: T
}

// 获取 K 中的所有 key, 遍历，并新类型的 key 用 T 类型做限制

// 比如我需要一个对象，有 ABC 三个属性，属性的值必须是数字，那么就这么写：
type keys = 'A' | 'B' | 'C'
const result: Record<keys, number> = {
  A: 1,
  B: 2,
  C: 3,
}
