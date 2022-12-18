// 导入 import
// 注意事项一: 在浏览器中直接使用 esmodule 时, 必须在文件后加上后缀名.js
import {
  name,
  age,
  height,
  sayHello
} from "./person.js"

console.log(name)
console.log(age)
console.log(height)

sayHello()