import axios from "axios"

// baseURL
const baseURL = "http://123.207.32.32:8000"

// 给 axios 实例配置公共的基础配置
axios.defaults.baseURL = baseURL
axios.defaults.timeout = 10000
axios.defaults.headers = {}