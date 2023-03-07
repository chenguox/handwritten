import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

class GXRequest {
  instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }

  request(config: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config: AxiosRequestConfig) {
    this.request({ ...config, method: 'GET' })
  }
}

export default GXRequest
