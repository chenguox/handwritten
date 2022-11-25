// 明确的指定<数组>的类型注解：两种写法

// 第一种写法：string[]
// 数组类型，并且数组中存放的字符串类型
let names: string[] = ['aaa', 'bbb', 'ccc']
names.push("aaa")
names.push(123)

// 第二种写法：Array<string>
// 数组类型，并且数组中存放的字符串类型
let nums: Array<number> = [111, 222, 333]

export {}