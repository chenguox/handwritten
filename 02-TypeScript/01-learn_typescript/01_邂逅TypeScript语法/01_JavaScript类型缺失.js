function getLength(args) {
  return args.length
}

// 调用函数

// 在 js 中使用 字符串 和 数组 调用是没问题的
console.log(getLength("aaaa"))
console.log(getLength(["aaa"]))

// 但是，当项目复杂，会容易出现如下，数字 和 undefined，在运行时才能发现，造成程序出错
console.log(getLength(123)
console.log(getLength())

console.log("后续的代码")