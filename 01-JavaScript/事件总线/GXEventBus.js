class GXEventBus {
  constructor() {
    this.eventBus = {}
  }

  // 监听名称，监听回调，携带参数
  on(eventName, eventCallback, thisArg) {
    // 判断 eventBus(事件总线) 中是否有已有该属性，没有则添加进去
    let handlers = this.eventBus[eventName]
    if (!handlers) {
      handlers = []
      this.eventBus[eventName] = handlers
    }
    // 给对应的 value 添加的数组，将回调方法和参数以对象的方式添加进去
    handlers.push({
      eventCallback,
      thisArg
    })
  }

  // 关闭监听名称，关闭回调
  off(eventName, eventCallback) {
    // 取出对应的 handlers (处理对象数组)
    const handlers = this.eventBus[eventName]
    // 获取不到，不处理
    if (!handlers) return
    // 进行拷贝
    const newHandlers = [...handlers]
    // 遍历
    for (let i = 0; i < newHandlers.length; i++) {
      // 取出对象，判断地址值一致的，将该对象通过 splice 移除
      const handler = newHandlers[i]
      if (handler.eventCallback === eventCallback) {
        const index = handlers.indexOf(handler)
        handlers.splice(index, 1)
      }
    }
  }

  // 发送监听名称，接收参数
  emit(eventName, ...payload) {
    // 取出对应的 handlers (处理对象数组)
    const handlers = this.eventBus[eventName]
    // 为空不执行
    if (!handlers) return
    // 遍历执行
    handlers.forEach(handler => {
      handler.eventCallback.apply(handler.thisArg, payload)
    });
  }
}

const eventBus = new GXEventBus()

function handleCallback(value) {
  console.log('触发监听时间aaa', value);
}
eventBus.on('aaa', handleCallback, {
  name: 'cgx'
})

eventBus.emit('aaa', 111)
eventBus.emit('aaa', 222)

// 移除监听
eventBus.off("aaa", handleCallback)
eventBus.emit("aaa", 333)