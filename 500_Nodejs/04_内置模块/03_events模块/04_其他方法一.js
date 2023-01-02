const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('cgx', () => {})
emitter.on('cgx', () => {})
emitter.on('cgx', () => {})

emitter.on('kobe', () => {})
emitter.on('kobe', () => {})


// 1. 获取所有监听事件的名称
console.log(emitter.eventNames())  // [ 'cgx', 'kobe' ]

// 2. 获取监听最大的监听个数
console.log(emitter.getMaxListeners()) // 10

// 3. 获取某一个事件名称对应的监听个数
console.log(emitter.listenerCount('cgx'))  // 3

// 4. 获取某一个事件名称对应的监听器函数(数组)
console.log(emitter.listeners("cgx"))