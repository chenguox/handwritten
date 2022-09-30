const queue = []
let waiting = false
const handleQueue = () => {
  queue.forEach(cb => {
    cb()
  })

  waiting = false
}

const nextTick = (cb) => {
  queue.push(cb)

  if(!waiting) {
    Promise.resolve().then(() => {
      handleQueue()
    })
    waiting = true
  }
}