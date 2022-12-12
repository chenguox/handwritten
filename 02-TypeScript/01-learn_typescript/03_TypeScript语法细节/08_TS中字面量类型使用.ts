// 1. 字面量类型的基本使用
const name: "cgx" = "cgx"
let age: 18 = 18

// 2. 将多个字面量的类型结合起来 |
type Direction = "left" | "right" | "up" | "down"
const d1: Direction = "left"

// 例子: 封装请求方法
type MethodType = "get" | "post"
function request(url: string, method: MethodType) {

}

request("http://codercgx.com/api/aaa", "post")

// TS 细节
const info = {
  url: "xxxx",
  method: "post"
}

// 下面的做法是错误: info.method 获取的是 string 类型
// request(info.url, info.method)

// 解决方案一: info.method 进行类型断言
request(info.url, info.method as "post")

// 解决方案二: 直接让 info 对象类型时一个字面量类型
const info2: { url: string, method: "post" } = {
  url: "xxxx",
  method: "post"
}
const info3 = {
  url: "xxxx",
  method: "post"
} as const
// xxx 本身就是一个string
request(info3.url, info3.method)

export {}