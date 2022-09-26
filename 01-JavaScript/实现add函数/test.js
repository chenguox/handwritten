// 实现一个 add 方法，使计算结果能够满足如下预期
// add(1)(2)(3)() = 6
// add(1,2,3)(4)() = 10

function add(...args1) {
  const allArgs = [...args1]

  const _add = function(...args2) {
    allArgs.push(...args2)

    if(args2.length === 0) {
      return allArgs.reduce((preValue, item) => preValue + item, 0)
    }

    return _add
  }

  return _add
}


console.log(add(1)(2)(3)(4)());
console.log(add(1)(2)(3)(4)(5)());
console.log(add(1, 2, 3)(3)(4)());
console.log(add(1)(1, 4)());



console.log(add(1)(2)())
console.log(add(1, 2, 3)(2, 3, 3)())