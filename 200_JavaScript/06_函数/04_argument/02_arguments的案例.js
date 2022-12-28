function sum() {
  var total = 0
  for (var i = 0; i < arguments.length; i++) {
    var num = arguments[i]
    total += num
  }
  return total
}

console.log(sum(10, 20))
console.log(sum(10, 20, 30))
console.log(sum(10, 20, 30, 40))