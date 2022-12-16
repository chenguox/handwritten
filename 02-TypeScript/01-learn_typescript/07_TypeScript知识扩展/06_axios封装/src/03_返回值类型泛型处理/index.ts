import { BASE_URL, TIME_OUT } from "./service/config";
import GXRequest from "./service/request";

const myRequest = new GXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,

  interceptors: {
    requestSuccessFn: (config) => {
      return config
    },
    requestFailureFn: err => {
      return err
    },
    responseSuccessFn: res => {
      return res.data
    }, 
    responseFailureFn: err => {

    }
  }
})

export const myRequest2 = new GXRequest({
  baseURL: "http://codercba.com:1888/airbnb/api",
  timeout: 8000
})


export default myRequest