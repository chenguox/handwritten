const axios = require('axios')

axios.defaults.baseURL = "http://123.207.32.32:8000"

// Promise.all
axios.all([
  axios.get("/home/multidata"),
  axios.get("http://123.207.32.32:9001/lyric?id=500665346")
]).then(res => {
  console.log("res:", res)
})
