import { BASE_URL, TIME_OUT } from "./service/config";
import GXRequest from "./service/request";

const myRequest = new GXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export const myRequest2 = new GXRequest({
  baseURL: "http://codercba.com:1888/airbnb/api",
  timeout: 8000,

  // 针对某个创建的实例的拦截器
  interceptors: {
    requestSuccessFn: (config) => {
      console.log("爱彼迎的请求成功的拦截")
      return config
    },
    requestFailureFn: (err) => {
      console.log("爱彼迎的请求失败的拦截")
      return err
    },
    responseSuccessFn: (res) => {
      console.log("爱彼迎的响应成功的拦截")
      return res.data
    },
    responseFailureFn: (err) => {
      console.log("爱彼迎的响应失败的拦截")
      return err
    }
  }
})

export default myRequest