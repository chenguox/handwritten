var timeString = "03/23/2033"

// 1. 方式一:
var date = new Date(timeString)
var timestamp = date.getTime()

// 2. 方式二:
var timestamp = Date.parse(timeString)
console.log(timestamp)