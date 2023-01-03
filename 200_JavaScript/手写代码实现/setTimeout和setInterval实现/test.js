function myInterval(fn, interval) {

  let timer = null

  const _interval = function() {
    timer = setTimeout(() => {
      fn()
      _interval()
    }, interval)
  }

  const cancel = function() {
    if(timer) clearTimeout(timer)
  }

  _interval()

  return cancel
}

const fn = function() {
  console.log('====')
}

const cancel = myInterval(fn, 1000)


setTimeout(() => {
  cancel()
}, 10000)