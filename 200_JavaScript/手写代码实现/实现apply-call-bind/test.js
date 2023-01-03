Function.prototype.myApply = function(thisArg, args) {
  const fn = this

  thisArg = (thisArg === undefined || thisArg === null) ? globalThis : Object(thisArg)

  thisArg.fn = fn

  args = args || []
  const result = thisArg.fn(args)

  delete thisArg.fn

  return result
}



function test(a, b) {
  console.log('====',a,b)
}

test.myApply(undefined)
test.myApply(123, 'aaa', bbb)