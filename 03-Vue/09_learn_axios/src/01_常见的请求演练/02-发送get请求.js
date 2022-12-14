const axios = require('axios')

// 1. 参数在 url 上
axios.get(`http://123.207.32.32:9001/lyric?id=500665346`).then(res => {
  console.log("res:", res.data.lrc)
})

// 2. 配置 params 传递参数
axios.get("http://123.207.32.32:9001/lyric", {
  params: {
    id: 500665346
  }
}).then(res => {
  console.log("res:", res.data.lrc)
})
