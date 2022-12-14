const axios = require('axios')

const baseURL = "http://123.207.32.32:8000"

axios.defaults.baseURL = baseURL

axios.get("/home/multidata").then(res => {
  console.log("res:", res.data)
})