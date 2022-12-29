// for循环
for(var i = 0; i < 3; i++) {
  var stu = {
    name: "cgx",
    age: 18,
    height: 1.88,
    running: function() {}
  }
}

// 工厂函数(工厂生产student对象) => 一种设计模式
// 通过工厂设计模式, 自己来定义一个这样的函数
function createStudent(name, age, height) {
  var stu = {}
  stu.name = name
  stu.age = age
  stu.height = height
  stu.running = function() {
    console.log("running~")
  }
  return stu
}

var stu1 = createStudent("cgx", 18, 1.88)
var stu2 = createStudent("kobe", 30, 1.98)
var stu3 = createStudent("james", 25, 2.05)
console.log(stu1)
console.log(stu2)
console.log(stu3)