interface IIndexType {
  // [index: number]: string
  // [index: string]: any
  [index: string]: string
}

// 索引签名: [index: number]: string
// const names: IIndexType = ["aaa", "bbb", "ccc"]

// 索引签名: [index: string]: any  :没有报错
// 1. 索引要求必须是字符串类型 names[0] => names["0"]
// const names: IIndexType = ["aaa", "bbb", "ccc"]

// 索引签名: [index: string]: string  :会报错
// 会报错的原因是,进行了严格字面量赋值检测
// ["aaa", "bbb", "ccc"] => Array实例 => names[0] names.forEach
const names: IIndexType = ["aaa", "bbb", "ccc"]
// names["forEach"] => function
// names["map/filter"] => function

export {}