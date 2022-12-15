// 使用的第三方库是一个纯的JavaScript库，没有对应的声明文件；比如lodash
import _ from "lodash"

// lodash
console.log(_.join(["abc", "cba"]))


// 给自己的代码添加类型声明文件
// 平时使用的代码中用到的类型, 直接在当前位置进行定义或者在业务文件夹某一个位置编写一个类型文件即可
type IDType = number | string
interface IKun {
  name: string
  age: number
  slogan: string
}

const id1: IDType = 123
// id1 = true


// 给自己的代码中声明一些类型, 方便在其他地方直接进行使用
// 需要编写类型声明
console.log(cgxName, cgxAge, cgxHeight)
console.log(foo('cgx'))