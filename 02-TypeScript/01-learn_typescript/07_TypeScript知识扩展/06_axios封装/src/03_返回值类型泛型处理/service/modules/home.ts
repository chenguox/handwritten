import myRequest from "../../index";

// 发送网络请求
interface IHomeData {
  data: any
  returnCode: string
  success: boolean
}

myRequest.request<IHomeData>({
  url: "/home/multidata",

  // 只针对某一个请求的拦截
  interceptors: {
    requestSuccessFn: (config) => {
      console.log("/home/multidata请求成功的拦截")
      return config
    },
    // res => any
    responseSuccessFn: (res) => {
      console.log("/home/multidata响应成功的拦截")
      return res
    }
  }
// res => unkonwn
}).then(res => {
  console.log("home: ", res)
})