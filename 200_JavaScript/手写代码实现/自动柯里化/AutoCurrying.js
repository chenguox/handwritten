/**
 * 自动柯里化函数
 * @param {*} fn 需要处理的函数
 * @returns 
 */
function GXCurrying(fn) {
  function _curried(...args) {
    // 判断当前已经传入的参数的个数，是否大于或等于需要的参数，是就执行
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      // 没有达到个数时，需要返回一个新的函数，继续来接收参数
      function _curried2(...args2) {
        // 接收到参数后，需要递归调用 _curried 来检查函数的个数是否达到
        return _curried.apply(this, args.concat(args2))
      }

      return _curried2
    }
  }

  return _curried
}

// 测试代码
function add1(x, y, z) {
  return x + y + z
}

const afterFn = GXCurrying(add1)

console.log(afterFn(10, 20, 30))
console.log(afterFn(10, 20)(30))
console.log(afterFn(10)(20)(30))