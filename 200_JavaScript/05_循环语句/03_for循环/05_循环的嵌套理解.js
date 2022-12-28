// for 循环的嵌套: 循环中执行体, 里面又嵌套了循环
for (var i = 0; i < 10; i++) {
  console.log("开始执行:", i)

  for (var j = 0; j < 3; j++) {
    console.log("执行 j 循环")
  }

  console.log("i结束执行:", i)
}