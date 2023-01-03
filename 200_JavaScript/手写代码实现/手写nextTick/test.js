const queue = []
let waiting = false
const runQueue = () => {
  queue.forEach(fn => {
    fn()
  })
  waiting = false
}




const nextTick = (cb) => {
  queue.push(cb)

  if(!waiting) {
    // 只需要执行一次
    Promise.resolve().then(() => {
      runQueue()
    })
    waiting = true
  }
}