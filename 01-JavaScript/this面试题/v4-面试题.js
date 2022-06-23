function Person(name) {
  this.name = name
  this.obj = {
    name: 'obj',
    foo1: function () {
      return function () {
        console.log(this.name)
      }
    },
    foo2: function () {
      return () => {
        console.log(this.name)
      }
    }
  }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()() // 1
person1.obj.foo1.call(person2)() // 2
person1.obj.foo1().call(person2) // 3

person1.obj.foo2()() // 4
person1.obj.foo2.call(person2)() // 5
person1.obj.foo2().call(person2) // 6


// 1、window
// 2、window
// 3、person2
// 4、obj
// 5、person2
// 6、obj