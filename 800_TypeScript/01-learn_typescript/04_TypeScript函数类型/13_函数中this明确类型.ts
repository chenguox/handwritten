// 在设置配置选项
// (编译选项 compilerOptions,
// noImplicitThis 设置为 true, 不允许模糊的this存在)

// 1. 对象中的函数中的this
const obj = {
  name: "cgx",
  studying: function(this: {}) {
    // 默认情况下, this 是 any 类型 
    console.log(this, "studying")
  }
}

// obj.studying() 
obj.studying.call({})

// 2. 普通的函数
function foo(this: { name: string }, info: { name: string }) {
  console.log(this, info)
}

foo.call({ name: "cgx" }, { name: "kobe" })

export {}