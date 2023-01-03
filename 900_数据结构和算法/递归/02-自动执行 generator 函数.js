function request(url) {
  return new Promise((resolve, reject) => {
    // 模拟网络请求
    setTimeout(() => {
      resolve(url)
    }, 1000)
  })
}

// 假设我们有这样的需求，
// 请求 aaa 获取结果
// 将结果拼接 bbb 再发请求，获取结果
// 在将结果拼接 ccc 再发起请求 获取结果
// 那么我们会形成回调地狱 
// request('aaa').then(res => {
//   request(res + 'bbb').then(res => {
//     request(res + 'ccc').then(res => {
//       console.log(res)
//     })
//   })
// })
// 可以利用 promise 中，在 then 中如果有返回值，那么相当于返回了一个 promise
// request('aaa').then(res => {
//   return request(res + 'bbb')
// }).then(res => {
//   return request(res + 'ccc')
// }).then(res => {
//   console.log(res)
// })

// 以上都不是很好，我们可以使用生成器函数
function* getData() {
  const res1 = yield request('aaa')
  const res2 = yield request(res1 + 'bbb')
  const res3 = yield request(res2 + 'ccc')
  console.log(res3)
}
// 如果手动执行生成器函数，如下：
// const generator = getData()
// generator.next().value.then(res => {
//   generator.next(res).value.then(res => {
//     generator.next(res).value.then(res=>{
//       generator.next(res)
//     })
//   })
// })

// 封装一个自动执行 generator 函数
function execGenerator(genFn){
  const generator = genFn()

  function exec(res) {
    const result = generator.next(res)
    console.log(result)
    
    // 结束递归
    if(result.done) {
      return result.value
    }

    // 递归执行
    result.value.then(res => {
      exec(res)
    })
  }

  exec()
}

execGenerator(getData)

