var names = ["aaa", "bbb", "ccc"]

// indexOf/lastIndexOf
// find: 查找元素


// includes
console.log(names.includes("ccc"))


// findIndex: 查找元素的索引
var findIndex = names.findIndex(function(item, index, arr) {
  return item === "ccc"
})
// var findIndex = names.findIndex(item => item === "ccc")
console.log(findIndex)

