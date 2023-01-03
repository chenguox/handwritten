import myRequest from "../../index";

myRequest.request({
  url: "/home/multidata",

  // 只针对某一个请求的拦截
  interceptors: {
    requestSuccessFn: (config) => {
      console.log("/home/multidata请求成功的拦截")
      return config
    },
    responseSuccessFn: (res) => {
      console.log("/home/multidata响应成功的拦截")
      return res.data
    }
  }

}).then(res => {
  console.log("home: ", res)
})