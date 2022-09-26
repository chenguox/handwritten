function fetchData({
  url,
  method: 'get',
  data: {}
}) {
  const xhr = new XMLHttpRequest()
  const promise = new Promise((resolve, reject) => {

    xhr.onload() {
      if (xhr.status > 200 || xhr.status < 300) {
        // console.log(xhr.response)
        resolve(xhr.response)
      }else{
        // console.log({status: xhr.status, message: xhr.statusText})
        reject({status: xhr.status, message: xhr.statusText})
      }
    }

    xhr.responseType = 'json'

    if(method.toUpperCase() === 'GET'){
      const params = []
      for(const key in data) {
        params.push(`${key}=${data[key]}`)
      }
      url = url + '?' + params.join('&')
      xhr.open(method, url)
      xhr.send()
    }else {
      xhr.open(method, url)
      xhr.setRequestHeader('Content-type', 'applycation/json')
      xhr.send(JSON.stringify(data))
    }
  })

  promise.xhr = xhr

  return promise
}

