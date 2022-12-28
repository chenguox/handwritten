function foo(name, age) {
  console.log("传入的参数:", name, age)

  // 在函数中都存在一个变量, 叫 arguments
  console.log(arguments)

  // arguments 是一个对象
  console.log(typeof arguments)

  // arguments对象内部包含了所有传入的参数
  console.log(arguments[0])
  console.log(arguments[1])
  console.log(arguments[2])
  console.log(arguments[3])

  // 对 arguments 来进行遍历
  for(var i = 0; i < arguments.length; i++) {
    console.log(arguments[i])
  }
}

foo("cgx", 18, 1.88, "广州市")