Function.prototype.myBind = function (Argthis, ...args) {
  const fn = this

  Argthis = (Argthis === null || Argthis === undefined) ? globalThis : Object(Argthis)

  const _fn = function(...args2){
    Argthis.fn = fn

    const allArgs = [...args,...args2]

    const result = Argthis.fn(...allArgs)
    delete Argthis.fn

    return result
  }

  return _fn
}


function fn(aa, bb) {
  console.log(aa, bb)
}

fn.myBind({ aaa: '222' }, ['aaa', 'bbb'])