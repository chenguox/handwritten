function debounce(fn, delay, immediate = false) {
  let timer = null
  let first = true

    function _debounce(...args) {
      return new Promise((resolve, reject) => {
        if(timer) clearTimeout(timer)

        if(immediate && first) {
          const result = fn.apply(this, args)
          resolve(result)
          first = false
        } else {
          timer = setTimeout(() => {
            const result = fn.apply(this, args)
            resolve(result)
            timer = null
            first = true
          }, delay)
        }
      })
    }

    _debounce.cancel = function() {
      if(timer) clearTimeout(timer)
      timer = null
      first = true
    }

    return _debounce
}

function test() {
  console.log('1111')
}

const newTest = debounce(test, 2000, true)


newTest()
newTest()
newTest.cancel()
// newTest()
// newTest()
// newTest()