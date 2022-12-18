const moduleA = (function() {
  let name = "小明"
  let age = 18
  let height = 1.88

  console.log(name)

  return {
    name,
    age,
    height
  }
}())

/**
  所以，我们会发现，虽然实现了模块化，但是我们的实现过于简单，并且是没有规范的。
  我们需要制定一定的规范来约束每个人都按照这个规范去编写模块化的代码； 
  这个规范中应该包括核心功能：模块本身可以导出暴露的属性，模块又可以导入自己需要的属性； 
  JavaScript社区为了解决上面的问题，涌现出一系列好用的规范，接下来我们就学习具有代表性的一些规范。
*/