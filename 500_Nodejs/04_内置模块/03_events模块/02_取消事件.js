// events 模块中的事件总线
const EventEmitter = require('events')

// 创建EventEmitter的实例
const emitter = new EventEmitter()

// 监听事件
function handleFn() {
  console.log("监听cgx的事件")
}
emitter.on('cgx', handleFn)


// 发射事件
setTimeout(() => {
  emitter.emit('cgx')

  // 取消事件监听
  emitter.off('cgx', handleFn)

  setTimeout(() => {
    emitter.emit('cgx')
  }, 1000);

}, 2000);