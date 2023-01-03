var name = 'window'

var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () {
    return () => {
      console.log(this.name)
    }
  }
}


var person2 = { name: 'person2' }

person1.foo1(); // 1
person1.foo1.call(person2); // 2

person1.foo2(); // 3
person1.foo2.call(person2); // 4

person1.foo3()(); // 5
person1.foo3.call(person2)(); // 6
person1.foo3().call(person2); // 7

person1.foo4()(); // 8
person1.foo4.call(person2)(); // 9
person1.foo4().call(person2); // 10

// 1、person1(隐式绑定)
// 2、person2(显示绑定优先级大于隐式绑定)
// 3、window(不绑定作用域,上层作用域是全局)
// 4、window
// 5、window(独立函数调用)
// 6、window(独立函数调用)
// 7、person2(最终调用返回函数式, 使用的是显示绑定)
// 8、person1(箭头函数不绑定this, 上层作用域this是person1)
// 9、person2(上层作用域被显示的绑定了一个person2)
// 10、person1(上层找到person1)