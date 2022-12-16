// 条件类型
const res = 2 > 3 ? true : false

type IDType = number | string

// 判断 number 是否是 extends IDType 
// 如果是 ResType 条件成立, 那么 ResType 为 true
type ResType = number extends IDType ? true : false
// 如果是 ResType 条件成立, 那么 ResType 为 fasle
type ResType2 = boolean extends IDType ? true : false


// 利用这一点, 可以获取到对应的类型, 成立, ResType3 就是 number 类型
type ResType3 = number extends IDType ? number : never



