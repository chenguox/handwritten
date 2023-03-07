// 接口接收参数类型
interface IPerson<Type> {
  name: Type
  age: number
  slogan: Type
}

// 指定为字符串类型
const p1: IPerson<string> = {
  name: 'aaa',
  age: 18,
  slogan: "哈哈哈"
}

// 指定为数字类型
const p2: IPerson<number> = {
  name: 123,
  age: 18,
  slogan: 111
}

// ==============

// 设置默认类型,可以不传类型
interface IPerson2<Type = string> {
  name: Type
  age: number
  slogan: Type
}

// 类型自动推导
const p3: IPerson2 = {
  name: 'bbb',
  age: 18,
  slogan: "你好啊, 李银河!"
}

export {}