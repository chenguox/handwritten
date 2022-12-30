var nums = [11, 22, 33, 44, 55, 66]

// for 循环实现
var newNums = []
for(var item of nums) {
  if(item % 2 === 0) {
    newNums.push(item)
  }
}

// filter 实现
var newNums2 = nums.filter(function(item) {
  return item % 2 === 0
})
console.log(newNums2)