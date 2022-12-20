import { sum } from './utils/math'
import "./utils/demo.js"

console.log("codercgx:", sum(20, 30))

// 指定哪一个模块需要HMR
if(module.hot) {
  module.hot.accept("./utils/math.js", () => {
    console.log("math模块发生了刷新")
  })
}

if (module.hot) {
  module.hot.accept("./utils/demo.js", () => {
    console.log("demo模块发生了更新")
  })
}
