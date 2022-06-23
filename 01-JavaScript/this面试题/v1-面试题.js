var name = "window";

var person = {
  name: "person",
  sayName: function () {
    console.log(this.name);
  }
};

function sayName() {
  var sss = person.sayName;
  sss(); // 1 
  person.sayName(); // 2 
  (person.sayName)(); // 3 
  (b = person.sayName)(); // 4
}

sayName();

// 1 window: 独立函数调用
// 2 person: 隐式调用
// 3 person: 隐式调用
// 4 window: 赋值表达式(独立函数调用)