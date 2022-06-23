Promise.resolve()
  .then(() => {
    console.log(0)
    // 1.直接return一个值 相当于resolve(4)
    return 4
  })
  .then((res) => {
    console.log(res)
  })

Promise.resolve()
  .then(() => {
    console.log(1)
  })
  .then(() => {
    console.log(2)
  })
  .then(() => {
    console.log(3)
  })
  .then(() => {
    console.log(5)
  })
  .then(() => {
    console.log(6)
  })

// 1.return 4
// 0
// 1
// 4
// 2
// 3
// 5
// 6