var message = "Hello World"

function sayHello() {
  var message = "Hello Codercgx"

  function hi() {
    var message = "Hi Kobe"
    console.log(message) // 就近原则
  }

  hi()
}

sayHello()