class myEventBus {
  constructor() {
    this.eventBus = {}
  }

  on(eventName, fn, thisArg) {
    let handles = this.eventBus[eventName]

    if (!handles) {
      handles = []
      this.eventBus[eventName] = handles
    }

    handles.push({
      fn,
      thisArg
    })
  }

  emit(eventName, ...payload) {
    const handles = this.eventBus[eventName]

    if(!handles) return 

    for(let i = 0; i < handles.length; i++){
      const handle = handles[i].fn
      const thisArg = handles[i].thisArg
      handle.apply(thisArg, payload)
    }
  }

  off(eventName, fn) {
    const handles = this.eventBus[eventName]

    if(!handles) return

    const copy = [...handles]

    for(let i = 0; i < copy.length; i++){
      if(copy[i].fn === fn) {
        const index = copy.indexOf(copy[i].fn)
        handles.splice(index, 1)
      }
    }
  }
}



const eventBus = new myEventBus()


function test(aaa,bbb) {
  console.log('发布了呀~', aaa, bbb)
}

eventBus.on('aaa', test, { bbb: 'ccc' })

eventBus.off('aaa', test)

eventBus.emit('aaa', '123', 'bbb')