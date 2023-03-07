// 需求： 保存我的个人信息 cgx 18 1.88
// 1. 使用数组类型
// 不适合： 数组中最好存放相同的数据类型，获取值之后不能明确的知道对应的数据类型
const info1: any[] = ['cgx', 18, 1.88]
const value = info1[2]
console.log(value)

// 2. 使用对象类型（最多）
const info2 = {
  name: "cgx",
  age: 18,
  height: 1.88
}

// 3. 使用元组类型
// 元组数据结构中可以存放不同的数据类型，取出来的 item 也是有明确的类型
const info3: [string, number, number] = ['cgx', 18, 1.88]
const value2 = info3[2]

// 在函数中使用元组类型时最多的（函数的返回值）
function useState(initialState: number): [number, (newValue: number) => void] {
  let stateValue = initialState
  function setValue(newValue: number) {
    stateValue = newValue
  }

  return [stateValue, setValue]
}

const [count, setCount] = useState(10)
console.log(count)
setCount(100)

export {}