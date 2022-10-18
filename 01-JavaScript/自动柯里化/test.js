function AutoCurry(fn) {
  const _curry = function(...args) {
    if(args.lenght >= fn.length) {
      fn.apply(this, args)
    }else{
      const _curry2 = function(...args2) {
        return _curry.apply(this, args.concat(args2))
      }

      return _curry2
    }
  }

  return _curry
}




// 测试代码
function add1(x, y, z) {
  return x + y + z
}

const afterFn = GXCurrying(add1)

console.log(afterFn(10, 20, 30))
console.log(afterFn(10, 20)(30))
console.log(afterFn(10)(20)(30))