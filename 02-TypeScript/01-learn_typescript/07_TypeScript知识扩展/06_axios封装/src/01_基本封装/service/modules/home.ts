import myRequest from "../../index";

// 发送网络请求
myRequest.request({
  url: "/home/multidata"
}).then(res => {
  console.log('home:', res)
})