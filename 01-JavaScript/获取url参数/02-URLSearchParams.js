let URL = "http://www.baidu.com?name=Jack&age=25&sex=men&wife=Lucy"

function getUrlParams(url) {
  let urlStr = url.split('?')[1]
  // 1、返回一个 URLSearchParams 对象
  const urlSearchParams = new URLSearchParams(urlStr)
  // URLSearchParams { 'name' => 'Jack', 'age' => '25', 'sex' => 'men', 'wife' => 'Lucy' }
  // 2、entries 方法返回一个可迭代对象
  const iterable = urlSearchParams.entries()
  // URLSearchParams Iterator {
  //   [ 'name', 'Jack' ],
  //   [ 'age', '25' ],
  //   [ 'sex', 'men' ],
  //   [ 'wife', 'Lucy' ] }
  // 3、使用 Object.fromEntries(iterable)
  const result = Object.fromEntries(iterable)
  // { name: 'Jack', age: '25', sex: 'men', wife: 'Lucy' }
  return result
}

console.log(getUrlParams(URL))