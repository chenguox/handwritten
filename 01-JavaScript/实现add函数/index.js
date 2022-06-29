// 实现一个 add 方法，使计算结果能够满足如下预期
// add(1)(2)(3)() = 6
// add(1,2,3)(4)() = 10

function add(...args1) {
  // 用来存储每次的参数
  const arr = [...args1]

  const _fn = function (...args2) {
    arr.push(...args2)
    // console.log(arr);

    if (args2.length === 0) {
      return arr.reduce((previous, item) => previous + item, 0)
    }
    return _fn
  }

  return _fn
}

console.log(add(1)(2)(3)(4)());
console.log(add(1)(2)(3)(4)(5)());
console.log(add(1, 2, 3)(3)(4)());
console.log(add(1)(1, 4)());


// other
function add2(...args1) {
  let allArgs = [...args1]

  function fn(...args2) {
    if (!args2.length) return fn.toString()

    allArgs = [...allArgs, ...args2]
    // console.log(allArgs);
    return fn
  }

  fn.toString = function () {
    return allArgs.reduce((pre, next) => pre + next)
  }

  return fn
} 


console.log(add2(1)(2)(3)(4)());
console.log(add2(1)(2)(3)(4)(5)());
console.log(add2(1, 2, 3)(3)(4)());
console.log(add2(1)(1, 4)());