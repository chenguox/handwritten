const util = require("./util")

console.log(util.name)

// 2s之后通过bar修改name
setTimeout(() => {
  util.name = "kobe"
}, 2000);

// 4s之后重新获取name
setTimeout(() => {
  console.log(util.name)
}, 4000);

// 说明获取到的 util 是指向个, 导出来的对象