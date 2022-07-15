// keyof 的作用可以理解为 把一个对象中的所有 键 提取出来。

// 1、提取所有的属性名（key）
interface Todo {
  title: string
  description: string
  completed: boolean
}
type TodoKeys = keyof Todo
//type TodoKeys =  'title' | 'description' | 'completed'

// 2、k 是未知的内容，提取 number 作为 key 的范围，name 属性名正常提取
type testkeys = keyof { [k: number]: any; name: string }
// type testkeys = number | "name"

// 3、特殊的例子，这是因为 JavaScript 对象键总是被强制转换为字符串，所以 obj[0] 总是与 obj["0"] 相同
type Mapish = { [k: string]: boolean; name: string }
type M = keyof Mapish
// type M = string | number
