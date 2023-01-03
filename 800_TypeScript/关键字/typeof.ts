const name = '111'
console.log(typeof name) // string
// typeof name => string

const student = {
  name: 'abc',
  age: 18,
}
console.log(typeof student)
// typeof student => { name: string, age: number}

// 获取对象类型
const userInfo = {
  name: 'aaa',
  age: 18,
  address: {
    provice: '湖北',
    city: '武汉',
  },
}
type UserInfo = typeof userInfo
// const userInfo: {
//   name: string;
//   age: number;
//   address: {
//       provice: string;
//       city: string;
//   };
// }

// 对只读属性的数组
let arr: readonly number[] = [1, 2, 3]

type Type = typeof arr
// type Type = readonly number[]

let arr1: Type = [2, 100]
arr1.push(1)
// type Type = readonly number[]

// 获取对象的类型
function add(x: number, y: number): number {
  return x + y
}
type Add = typeof add
// function add(x: number, y: number): number
// 等同于
type Add = (x: number, y: number) => number

// 看下如果没有显式的描述函数返回类型，typeof会不会显示出返回类型：
function fn(x: string | number) {
  if (typeof x === 'string') {
    return x.split('')
  }
  return x
}

type Fn = typeof fn
// 返回类型都推断出来了
// function fn(x: string | number): number | string[]

// enum
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
type Result = typeof Direction

let res: Result = {
  Up: 2,
  Down: 4,
  Left: 6,
  Right: 8,
}
// 此时Result类型类似于：
// {
//   Up: number,
//   Down: number,
//   Left: number,
//   Right: number,
// }


// 对class 使用 typeof
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let PersonClass: typeof Person;
// let PersonClass: new (name: string, age: number) => Person

let person = new PersonClass("xman", 18);
// 使用typeof Person，意思是取Person类的类型，而不是实例的类型。 或者更确切的说：获取Person标识符的类型，也就是构造函数的类型。 这个类型包含了类的所有静态成员和构造函数。 之后，我们在PersonClass上使用new，创建PersonClass的实例。

https://blog.csdn.net/zxl1990_ok/article/details/125474154