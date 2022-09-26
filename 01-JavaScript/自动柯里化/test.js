function myCurry(fn) {
  const _curry = function(...args) {
    if(args.length >= fn.length) {
      const result = fn(...allArgs)
      return result
    } else {
      const _curry2 = function(...args2) {
        return _curry.apply(this, args.concat(args2))
      }
  
      return _curry2
    } 
  }

  return _curry
}


function test(a, b, c, d) {
  return a + b + c + d
}

const curryFn = myCurry(test)

console.log(curryFn(1, 2, 3, 4))


console.log(curryFn(1)(2)(3)(4))
console.log(curryFn(1, 2)(3, 4))
console.log(curryFn(1, 2, 3)(4))

