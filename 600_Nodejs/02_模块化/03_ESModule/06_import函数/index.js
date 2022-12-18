// 通过 import 加载一个模块, 是不可以在其放到逻辑代码中
// 比如:
// if(true) {
//   import formatDate from './format.js'
// }

/**
 * 原因:
    这是因为ES Module在被JS引擎解析时，就必须知道它的依赖关系； 
    由于这个时候js代码没有任何的运行，所以无法在进行类似于if判断中根据代码的执行情况； 
    甚至拼接路径的写法也是错误的：因为我们必须到运行时能确定path的值
 */

  // import 函数

  let flag = true
  if(flag) {
    // 逻辑成立时, 才需要导入某个模块
    const importPromise = import("./format.js")
    importPromise.then(res => {
      console.log(res.name)
    })

    import("./format.js").then(res => {
      console.log(res.name)
    })
  }