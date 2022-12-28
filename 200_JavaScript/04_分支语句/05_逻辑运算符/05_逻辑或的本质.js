// 脱离分支语句, 单独使用逻辑或
/**
  1. 先将运算元转成 Boolean 类型
  2. 对转成的 boolean 类型进行判断
    * 如果为 true, 直接将结果(原始值)返回
    * 如果为 false, 进行第二个运算元的判断
  3. 如果找到最后, 也没有找到, 那么返回最后一个运算元
 */

// var name = "why"
// name || 运算元2 || 运算元3

// 本质推导一: 之前的多条件是如何进行判断
var chineseScore = 95
var mathScore = 99
// chineseScore > 90 为 true, 那么后续的条件都不会进行判断
if(chineseScore > 90 || mathScore > 90) {}

// 本质推导二: 获取第一个有值的结果
var info = "aaa"
var obj = {
  name: "cgx"
}
var message = info || obj || "我是默认值"
console.log(message.length)