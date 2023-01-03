Function.prototype.gxapply = function (thisArg, args) {
  // 1、获取要执行的函数
  let fn = this

  // 2、处理绑定的thisArg
  thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : window

  // 3、执行函数
  thisArg.fn = fn

  args = args || []
  const result = thisArg.fn(args)

  delete thisArg.fn

  // 4.返回结果
  return result
}

function print(a) {
  console.log(this, a);
}


const obj = {
  name: 'cgx'
}

const age = 18

print.gxapply(obj, 123, '321')
print.gxapply('123')
