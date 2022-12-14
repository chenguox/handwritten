const axios = require('axios')

const config = {
  url: "http://123.207.32.32:8000/home/multidata",
  method: "get"
}

axios.request(config).then(res => {
  console.log("res: ", res.data)
})