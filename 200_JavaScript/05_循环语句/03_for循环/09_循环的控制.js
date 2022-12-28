var names = ["aaa", "bbb", "ccc", "ddd", "eee"]

// 循环遍历数组

//1.  break 关键字的使用
// 需求: 遇到 ccc 时, 不再执行后续的迭代
for(var i = 0; i < 4; i++) {
  console.log(names[i])
  if(names[i] === "ccc") {
    break
  }
}

console.log("========")

// 2. continue 关键字的使用
// 作用: 立刻结束本次循环, 执行下一次循环(step)
// 需求: 不打印 ccc
for(var i = 0; i < 4; i++) {
  if(names[i] === "ccc") {
    continue
  }
  console.log(names[i])
}