const EventEmitter = require('events')

const ee = new EventEmitter()

// 1. once: 事件监听只监听一次(第一次发射事件的时候进行监听)
ee.once('cgx', () => {
  console.log('监听 cgx 事件')
})

ee.emit('cgx')
ee.emit('cgx')
ee.emit('cgx')

console.log("=========")

// 2. prependListener: 将事件监听添加到最前面
ee.on('aaa', () => {
  console.log('监听aaa事件')
})

ee.prependListener('aaa', () => {
  console.log('prependListener的作用')
})

ee.emit('aaa')

// 3. 移除所有的事件监听
// 不传递参数的情况下, 移除所有事件名称的所有事件监听
// 在传递参数的情况下, 只会移除传递的事件名称的实际监听
ee.removeAllListeners('cgx')