const names: string[] = ["aaa", "bbb", "ccc"]

// 匿名函数是否需要添加类型注解呢？
// 最好不要添加类型注解
names.forEach(function(item, index, arr) {
  console.log(item, index, arr)
})

export {}