// 为了区分函数需要响应式，还是不需要响应式，默认函数不是响应式，执行过 watchFn 函数才是响应式函数

const reactiveFns = []
function watchFn(fn) {
  reactiveFns.push(fn)
  fn()
}