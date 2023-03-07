interface IIndexType {
  // 两个索引类型的写法
  [index: number]: string
  [key: string]: any
}

const names: IIndexType = ["aaa", "bbb", "ccc"]
const item1 = names[0]
const forEachFn = names["forEach"]

names["aaa"]


// ====
// 要求一: 下面这种写法不允许: 数字类型索引的类型, 必须是字符串类型索引的类型的 子类型
interface IIndexType2 {
  [index: number]: number | string
  [key: string]: string
}
// 结论: 数字类型必须是比如字符串类型更加确定的类型(需要是字符串类型的子类型)
// 原因: 所有的数字类型都是会转成字符串类型去对象中获取内容
// 数字0: number|string, 当我们是一个数组的时候,既要满足通过 number 去拿到内容, 不会和 string 拿到的结果矛盾
// 即不可能这样:
// XX[0] = 1, XX[0] => XX["0"]
// XX["0"] = "1"


// 要求二: 如果索引签名中有定义其他属性, 其他属性返回的类型, 必须符合 string 返回的属性
interface IIndexType3 {
  [index: number]: number
  [key: string]: number | string
}

export {}