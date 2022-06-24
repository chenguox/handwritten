function gxajax({
  url,
  method = "get",
  data = {}
}) {
  // 1、创建 xhr 对象
  const xhr = new XMLHttpRequest()

  // 2、监听数据
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status <= 300) {
      console.log(xhr.response);
    } else {
      console.log({ status: xhr.status, message: xhr.statusText });
    }
  }

  // 3、设置类型
  xhr.responseType = "json"

  // 4、配置并发送请求
  if (method.toUpperCase() === 'GET') {
    // 优化get也可以接收data数据
    const queryStrings = []
    for (const key in data) {
      queryStrings.push(`${key}=${data[key]}`)
    }
    url = url + '?' + queryStrings.join('&')
    xhr.open(method, url)
    xhr.send()
  } else {
    xhr.open(method, url)
    // 告诉服务器请求参数是json字符串格式
    xhr.setRequestHeader('Content-type', "application/json")
    xhr.send(JSON.stringify(data))
  }
}

