abstract class Shape {
  // getArea 方法只有声明米有实现体
  // 实现让子类自己实现
  // 可以将getArea方法定义为抽象方法: 在方法的前面加 abstract
  // 抽象方法必须出现在抽象类中, 类前面也需要加 abstract
  abstract getArea()
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super()
  }

  getArea() {
    return this.width * this.height
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super()
  }

  getArea() {
    return this.radius ** 2 * Math.PI
  }
}

class Triangle extends Shape {
  getArea() {
    return 100
  }
}

// 通用的函数
function calcArea(share: Shape) {
  return share.getArea()
}

calcArea(new Rectangle(10, 20))
calcArea(new Circle(5))
calcArea(new Triangle())

// 在 Java 中会报错: 不允许
calcArea({ getArea: function() {} })

// 抽象类不能实例化
// calcArea(new Shape())
// 类型 number 的参数不能赋给类型 "Shape" 的参数
calcArea(100)
calcArea("abc")