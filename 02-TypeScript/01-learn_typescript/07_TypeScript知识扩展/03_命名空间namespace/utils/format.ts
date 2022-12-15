// 早期,将一个模块内部再进行作用域的划分, 防止一些命名冲突的问题

export namespace price {
  export function format(price: string) {
    return "💰" + price
  }
  export const name = "price"
}

export namespace date {
  export function format(dateString) {
    return "2022-10-10"
  }
  export const name = "data"
}
