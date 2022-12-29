var name = "Hello World"
var height = 1.88888

console.log(name.length) // 11
console.log(name.split(" ")) // Array(2)
console.log(height.toFixed(2)) // 1.88

// 在调用原始类型的属性或者方法时, 内部的操作 :
// name = new String(name)
// function String(str) {
//   this.str = str
//   this.length = 11
//   this.split = function() {
//   }
// }



var obj = {
  name: "kobe",
  running: function() {}
}
obj.running()

// 原始类型默认也是可以手动创建对象(没有必要这样来做)
var name1 = new String("Hello World")
console.log(typeof name, typeof name1) // string object