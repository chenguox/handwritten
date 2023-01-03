const arr = [1, 2, 3, 4, 10, 12, 10, 2, 1]

const newArray = []
arr.forEach(v => {
  if (newArray.indexOf(v) === -1) {
    newArray.push(v)
  }
})
console.log(newArray);