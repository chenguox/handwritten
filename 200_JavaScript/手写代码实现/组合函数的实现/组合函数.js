/**
 * 接收多个函数，依次调用函数，将结果作为下一个函数的参数
 * @param  {...any} fns 
 * @returns 
 */
function gxCompose(...fns) {
  // 获取函数的个数
  const length = fns.length

  // 边界判断，是否有非函数的
  for (let i = 0; i < length; i++) {
    if (typeof fns[i] !== 'function') {
      throw new TypeError('Expected arguments are functions')
    }
  }

  // 返回组合函数
  function _compose(...args) {
    // 依次执行内部的函数,将结果作为下一个函数调用的参数

    let index = 0
    let result = length ? fns[index].apply(this, args) : args
    while (++index < length) {
      result = fns[index].call(this, result)
    }
    return result
  }

  return _compose
}

// 测试代码
function double(m) {
  return m * 2
}

function square(n) {
  return n ** 2
}

var newFn = gxCompose(double, square)
console.log(newFn(10))
