import { BASE_URL, TIME_OUT } from "./service/config";
import GXRequest from "./service/request";

// 创建第一个自己的axios实例
const myRequest = new GXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

// 创建第二个实例
// export const myRequest2 = new GXRequest({
//   baseURL: BASE_URL,
//   timeout: TIME_OUT
// })

export default myRequest