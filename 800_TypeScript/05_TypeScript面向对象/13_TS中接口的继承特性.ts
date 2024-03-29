interface IPerson {
  name: string
  age: number
}

// 可以从其他的接口中继承过来属性
// 1. 减少了相同代码的重复编写
// 2. 如果使用第三库, 给我们定义了一些属性
// > 自定义一个接口, 同时你希望自定义接口拥有第三方某一个类型中所有的属性
// > 可以使用继承来完成


interface IKun extends IPerson {
  slogan: string
}

const ikun: IKun = {
  name: "cgx",
  age: 18,
  slogan: "你好啊, 李银河!"
}

export {}