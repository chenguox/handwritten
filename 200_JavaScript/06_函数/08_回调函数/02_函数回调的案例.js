function request(url, callback) {
  console.log("根据URL向服务器发送网络请求")
  console.log("需要花费比较长的时间拿到对应的结果")
  
  // 假设这是请求回来的数据
  var list = ["javascript", "javascript学习", "JavaScript高级编程"]

  callback(list)
}

// 传入的函数是没有名字, 匿名函数
request("url", function(res) {
  console.log("在handleResult中拿到结果:", res)
})