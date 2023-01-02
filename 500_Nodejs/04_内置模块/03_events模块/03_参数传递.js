const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('cgx', (name, age, height) => {
  console.log('监听 cgx 事件: ', name, age, height)
})

emitter.emit('cgx', 'codercgx', 18, 1.88)