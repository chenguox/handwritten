// 1. 定义了一个对象
var info = {
  name: "cgx",
  age: 18,
  friend: {
    name: "kobe",
    age: 30
  },
  running: function() {
    console.log("running~ ")
  }
}

// 2. 访问对象中的属性
console.log(info.name)
console.log(info.friend.name)
info.running()


// 3. 修改对象中的属性
info.age = 25
info.running = function() {
  console.log("I am running")
}
console.log(info.age)
info.running()

// 4. 添加对象中的属性
info.height = 1.88
info.studying = function() {
  console.log("I am studying~")
}
console.log(info)


// 5. 删除对象中的属性
// delete 关键字(操作符)
delete info.age
delete info.height
console.log(info)