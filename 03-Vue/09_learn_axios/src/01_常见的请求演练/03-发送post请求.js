const axios = require('axios')

axios.post("http://123.207.32.32:1888/02_param/postjson", {
  name: "coderwhy",
  password: 123456
}).then(res => {
  console.log("res:", res.data)
})


axios.post("http://123.207.32.32:1888/02_param/postjson", {
  data: {
    name: "coderwhy",
    password: 123456
  }
}).then(res => {
  console.log("res:", res.data)
})