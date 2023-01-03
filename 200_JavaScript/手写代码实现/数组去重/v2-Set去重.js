const arr = [1, 2, 3, 4, 10, 12, 10, 2, 1]

const s = new Set(arr)
const newArray = [...s]
console.log(newArray);