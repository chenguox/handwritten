// extends 在 TS 的 函数体中的时候起到的是判断范畴的一个作用
// 在一些特殊位置 （比如接收泛型的时候，在函数运算过程中断言变量类型的时候）起到的是一个 约束类型 的作用

// 1、判断范畴
type mytype1 = 1 extends string ? true : false // false
// 1 是否属于 string 类型， 答案肯定不是 string 类型，所以得到 false
type mytype2 = '1' extends string ? true : false // true
// '1' 是 string 类型，所以得到 true
type mytype3 = string extends '1' ? true : false // false
// string 类型范围肯定比 '1' 大, 换句话说就是，'1' 肯定包括不了所有的 string，所以为 false
type mytype4 = mytype1 extends any ? 1 : 2 // 1
// any 类型包含一切，所以 mytype1 属于 any 类型的，所以为 1
type mytype5 = [90] extends unknown[] ? true : false // true
//[90] 是一个数值型数组，是属于一个 unknown 未知类型的数组中，因为未知类型也包含数字类型
type mytype6 = [90] extends string[] ? true : false // false
// [90] 不属于 string[] 的范畴

// 2、约束类型
type StrPush<T extends string[], U extends string> = [...T, U]
type myarr = StrPush<['1', '2', '3'], '4'>
// 如上，T 被限制只能接收 string 类型的数组， U 被限制只能接收 string 类型
