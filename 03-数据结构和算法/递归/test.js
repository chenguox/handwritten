const arr = [[2], [[2, 3], [2]], 3, 4]

Array.prototype.myFlat = function () {
  const arr = this

  let result = []
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(item.myFlat())
    } else {
      result.push(item)
    }
  })

  return result
}

console.log(arr.myFlat())
// [2, 2, 3, 2, 3, 4]
