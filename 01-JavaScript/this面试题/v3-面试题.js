var name = 'window'

function Person(name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  },
    this.foo2 = () => console.log(this.name),
    this.foo3 = function () {
      return function () {
        console.log(this.name)
      }
    },
    this.foo4 = function () {
      return () => {
        console.log(this.name)
      }
    }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo1() // 1
person1.foo1.call(person2) // 2

person1.foo2() // 3
// this 在 new 的时候就确定是 person1 了，
person1.foo2.call(person2) // 4

person1.foo3()() // 5
person1.foo3.call(person2)() // 6
person1.foo3().call(person2) // 7

person1.foo4()() // 8
person1.foo4.call(person2)() // 9
person1.foo4().call(person2) // 10


// 1、person1
// 2、person2(显示高于隐式绑定)
// 3、person1 (上层作用域中的this是person1)
// 4、person1 (上层作用域中的this是person1)
// 5、window(独立函数调用)
// 6、window
// 7、person2
// 8、person1
// 9、person2
// 10、person1