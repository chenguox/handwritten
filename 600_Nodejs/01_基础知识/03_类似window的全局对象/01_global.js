// node 中是没有 window 对象的
// console.log(window)  
// window is not defined

// 类似于 window 的全局对象
console.log(global)

// 在浏览器和Node中可以使用 globalThis
console.log(globalThis)
console.log(global === globalThis)

/** 
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 51.96257400512695,
      nodeStart: 2.7986469864845276,
      v8Start: 4.418843001127243,
      bootstrapComplete: 37.64855098724365,
      environment: 22.813840001821518,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1671254963346.734
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}

*/