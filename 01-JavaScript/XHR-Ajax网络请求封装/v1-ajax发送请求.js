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

// 4、配置请求
xhr.open('get', 'http://123.207.32.32:1888/02_param/get')
// 5、发送请求
xhr.send()
