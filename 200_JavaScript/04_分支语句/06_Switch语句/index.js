// 语法
// switch (表达式/变量) {
//   case 常量1:
//     // 语句
// }


// 案例:
// 上一首的按钮: 0
// 播放/暂停的按钮: 1
// 下一首的按钮: 2
// var btnIndex = 100
// if (btnIndex === 0) {
//   console.log("点击了上一首")
// } else if (btnIndex === 1) {
//   console.log("点击了播放/暂停")
// } else if (btnIndex === 2) {
//   console.log("点击了下一首")
// } else {
//   console.log("当前按钮的索引有问题~")
// }

// 使用 switch 实现
var btnIndex = 0
switch (btnIndex) {
  case 0:
    console.log("点击了上一首")
    break
  case 1:
    console.log("点击了播放/暂停")
    // 默认情况下是有case穿透
    break
  case 2:
    console.log("点击了下一首停")
    break
  default: 
    console.log("当前按钮的索引有问题~")
    break
}
