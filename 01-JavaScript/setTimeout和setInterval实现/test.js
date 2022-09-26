function mySetTimeout(fn, delay) {
  const timer = setInterval(() => {
    fn()
    clearInterval(timer)
  }, delay);
}

function mySetInterval(fn, interval) {
  let timer = null

  const _interval = function() {
    timer = setTimeout(() => {
      fn()
      _interval()
    }, interval);
  }

  _interval()

  const cancel = function() {
    if(timer) clearTimeout(timer)
  }

  return cancel
}

const cancel = mySetInterval(function(){
  console.log('====')
}, 1000)

setTimeout(() => {
  cancel()
}, 10000);