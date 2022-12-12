// 1. 区别一: type 类型使用范围更广, 接口类型只能用来声明对象
type MyNumber = number
type IDType = number | string

// 2. 区别二: 在声明对象时, interface 可以多次声明
// 2.1 type 不允许两个相同名称的别名同时存在
type PointType1 = {
  x: number
  y: number
}
type PointType1 = {
  z?: number
}

// 2.2 interface 可以多次声明同一个接口名称
interface PointType2 {
  x: number
  y: number
}

interface PointType2 {
  z?: number
}

const point: PointType2 = {
  x: 100,
  y: 200,
  z: 300
}

// 3. interface 支持继承的
interface IPerson {
  name: string
  age: number
}

interface IKun extends IPerson {
  kouhao: string
}

const ikun1: IKun = {
  name: 'kobe',
  age: 30,
  kouhao: "你好啊!"
}

// 4. interface 可以被类实现
class Person implements IPerson {
  
}

export {}