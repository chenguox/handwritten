export const name = "codercgx"

// 默认导出, 不需要指定名字
export default function() {
  return "2022-11-12"
}


// import.meta是一个给JavaScript模块暴露特定上下文的元数据属性的对象。
// - 它包含了这个模块的信息，比如说这个模块的URL； 
// - 在ES11（ES2020）中新增的特性；
console.log(import.meta)