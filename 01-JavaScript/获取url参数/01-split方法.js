let URL = "http://www.baidu.com?name=张三&age=25&sex=男&wife=小红"

function getUrlParams(url) {
  let urlStr = url.split('?')[1]
  let paramsArr = urlStr.split('&')

  const params = {}
  for(const item of paramsArr) {
    let arr = item.split('=')
    params[arr[0]] = arr[1]
  }

  return params
}


console.log(getUrlParams(URL))

