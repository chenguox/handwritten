const p1 = new Promise((resolve, reject) => {
  reject('111')
})
const p2 = new Promise((resolve, reject) => {
  resolve('222')
})

Promise.all([p1, p2]).then(result => {
  console.log(result)
}).catch(err => {
  console.log(err)
})