// 如 lodash模块默认不能使用的情况，可以自己来声明这个模块：
declare module "lodash" {
  export function join(...args: any[]): any
}


// 为自己的 变量/函数/类 定义类型声明
declare const cgxName: string
declare const cgxAge: number
declare const cgxHeight: number

declare function foo(bar: string):string

declare class Person {
  constructor(public name: string, public age: number)
}


// 声明文件模块
declare module "*.png"
declare module "#.jpg"
declare module "*.jpeg"
declare module "*.svg"
// vue 文件
declare module "*.vue"



// 声明成模块(不合适)
// 声明命名空间
declare namespace $ {
  export function ajax(settings: any): any
}