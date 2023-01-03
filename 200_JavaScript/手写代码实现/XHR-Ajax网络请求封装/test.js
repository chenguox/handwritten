function fetch({
  url,
  method: 'get',
  data
}) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.onload = function () {
      if (xhr.status > 200 && xhr.status < 300) {
        // console.log(xhr.response)
        resolve(re)
      } else {
        console.log({ status: xhr.status, message: xhr.statusText })
      }
    }

    xhr.responseType = 'json'


    if(method.toUpperCase() === 'GET') {
      const queryStrings = []
      for(const key in data) {
        queryStrings.push(`${key}=${data[key]}`)
      }
      url = url + '?' + queryStrings.json('&')
      xhr.open(methods, url)
      xhr.send()
    }else{
      xhr.open(methods, url)
      xhr.setRequestHeader('Content-type', "application/json")
      xhr.send(JSON.stringify(data))
    }
  })
}
