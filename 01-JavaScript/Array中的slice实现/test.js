Array.prototype.mySlice = function(start, end) {
  const arr = this

  start = start || 0
  end = end || arr.length

  const result = []
  for(let i = start; i < end; i++) {
    result.push(arr[i])
  }
  return result
}




const arr = [1,2,3,4,5]
const newArr = arr.mySlice(1, 3)

console.log(newArr)