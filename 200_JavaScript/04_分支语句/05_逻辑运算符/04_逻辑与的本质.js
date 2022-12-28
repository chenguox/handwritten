// 运算元1 && 运算元2 && 运算元3
/**
  也可以脱离条件判断来使用

  逻辑与的本质
  1. 拿到第一个运算元, 将运算元转成 Boolean 类型
  2. 对运算元的 Boolean 类型进行判断
    * 如果 false, 返回运算元(原始值)
    * 如果 true, 查找下一个继续来运算
    * 以此类推
  3. 如果查找了所有的都为 true, 那么返回最后一个运算元(原始值)

 */


// 本质推导一: 逻辑与, 称之为短路与
var chineseScore = 80
var mathScore = 99
if(chineseScore > 90 && mathScore > 90) {}

// 本质推导二: 对一些对象中的方法进行有值判断
var obj = {
  name: "cgx",
  friend: {
    name: "kobe",
    eating: function() {
      console.log("eat something")
    }
  }
}

// 调用 eating 函数
// obj.friend.eating()
obj && obj.friend && obj.friend.eating && obj.friend.eating()