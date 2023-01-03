import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

interface MYAxiosRequestConfig extends AxiosRequestConfig{
  interceptors?: {
    requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
    requestFailureFn?: (err: any) => any
    responseSuccessFn?: (res: any) => any
    responseFailureFn?: (err: any) => any
  }
}

class GXRequest {
  instance: AxiosInstance

  constructor(config: MYAxiosRequestConfig) {
    this.instance = axios.create(config)

    // 每个 instance 实例都添加拦截器
    this.instance.interceptors.request.use(config => {
      // loading/token
      console.log("全局请求成功的拦截")
      return config
    }, err => {
      console.log("全局请求失败的拦截")
      return err
    })
    this.instance.interceptors.response.use(res => {
      console.log("全局响应成功的拦截")
      return res.data
    }, err => {
      console.log("全局响应失败的拦截")
      return err
    })

    if(config.interceptors) {
      // 拦截器是可以添加多个的
      this.instance.interceptors.request.use(
        config.interceptors.requestSuccessFn,
        config.interceptors.requestFailureFn
      )
      this.instance.interceptors.request.use(
        config.interceptors.responseSuccessFn,
        config.interceptors.responseFailureFn
      )
    }
  }

  request(config: MYAxiosRequestConfig) {
    // 拦截器本质上也是回调函数,所以我们利用这点直接调用即可
    if(config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }

    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        // 单次响应的成功拦截处理
        if(config.interceptors?.responseSuccessFn) {
          res = config.interceptors.responseSuccessFn(res)
        }
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default GXRequest