import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { MyAxiosRequestConfig } from './type'


class GXRequest {
  instance: AxiosInstance

  constructor(config: MyAxiosRequestConfig) {
    this.instance = axios.create(config)

    this.instance.interceptors.request.use((config) => {
      return config
    })
    this.instance.interceptors.request.use((err) => {
      return err
    })
    this.instance.interceptors.response.use((res) => {
      return res.data
    })
    this.instance.interceptors.response.use((err) => {
      return err
    })

    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }

  request<T = any>(config: MyAxiosRequestConfig<T>) {
    if(config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if(config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: MyAxiosRequestConfig<T>) {
    return this.request({ ...config, method: "GET"})
  }

  post<T = any>(config: MyAxiosRequestConfig<T>) {
    return this.request({ ...config, method: "POST"})
  }

  delete<T = any>(config: MyAxiosRequestConfig<T>) {
    return this.request({ ...config, method: "DELETE"})
  }

  patch<T = any>(config: MyAxiosRequestConfig<T>) {
    return this.request({ ...config, method: "PATCH"})
  }
}

export default GXRequest
