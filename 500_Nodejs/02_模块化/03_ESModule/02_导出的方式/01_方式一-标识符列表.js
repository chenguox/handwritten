const name = "codercgx"
const age = 18
const height = 1.88

function sayHello() {
  console.log("你好啊! 李银河")
}

// 导出 export, 这里的 {} 不是一个对象, 里面也不是 ES6的对象字面量的增强写法
export {
  name,
  age,
  height,
  sayHello
}