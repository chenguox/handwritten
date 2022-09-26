// 定义一个执行 nextTick 的队列
const queue = []
let waiting = false
function runQueue() {
  queue.forEach(cb => cb())
  // 队列执行完毕，初始化队列状态
  waiting = false
}

const nextTick = (cb) => {
  queue.push(cb)

  // 调用 nextTick 时，就开启执行队列，但会推迟放到微任务队列中执行
  if(!waiting) {
    // 使用 promise 对队列进行包裹，实现放到微任务队列中
    Promise.resolve().then(() => {
      runQueue()
    })
    // 一次事件循环，nextTick 的回调都放入队列中，只开启一次队列
    waiting = true
  }
}

// 测试代码
console.log('=====开始执行======')
const cb1 = () => { console.log('====cb1====')}
const cb2 = () => { console.log('====cb2====')}
nextTick(cb1)
nextTick(cb2)
console.log('=========结束=========')