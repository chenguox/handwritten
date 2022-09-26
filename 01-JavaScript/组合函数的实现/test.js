function myCompose(...fns){
  fns.forEach(fn => {
    if(!typeof fn === 'function') {
      throw new TypeError('is not Function')
    }
  })

  const _compose = function(...args){
    let index = 0
    let result = fns.length > 0 ? fns[0].apply(this, args) : args

    while(++index < fns.length){
      result = fns[index].call(this, result)
    }

    return result
  }

  return _compose
}

function test1(a, b) {
  return a + b
}

function test2(c) {
  console.log(c)
}

const composeFn = myCompose(test1, test2)
composeFn(10, 20)