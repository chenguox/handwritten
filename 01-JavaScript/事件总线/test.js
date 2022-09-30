class myEventBus {
  constructor(){
    this.eventBus = {}
  }

  on(eventName, eventCallBack, thisArg) {
    let handles = this.eventBus[eventName]
    if(!handles) {
      handles = []
      this.eventBus[eventName] = handles
    }
    handles.push({
      eventCallBack,
      thisArg
    })
  }

  emit(eventName, ...args) {
    const handles = this.eventBus[eventName]
    if(!handles) return
    handles.forEach(handle => {
      handle.eventCallBack.apply(handle.thisArg, args)
    }) 
  }

  off(eventName, eventCallBack) {
    const handles = this.eventBus[eventName]
    if(!handles) return
    const newHandles = [...handles]
    for(const handle of newHandles){
      if(handle.eventCallBack === eventCallBack){
        const index = newHandles.indexOf(handle)
        handles.splice(index,1)
      }
    }
  }
}

const myEvent = new myEventBus()

const fn = () => {
  console.log('这是 test1')
}

// 订阅
myEvent.on('test', fn , 'aaa')

myEvent.on('test', () => {
  console.log('这是 test2')
}, 'bbb')

myEvent.off('test', fn)

myEvent.emit('test')