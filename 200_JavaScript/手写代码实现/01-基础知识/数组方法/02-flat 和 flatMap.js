// 会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

// 1. flat
const nums = [1,2,[3,4],[[5,6],[7,8],[9,10]]]

const newNums = nums.flat() // 默认不传参的深度为1，通过 flat 可以实现让数组扁平化。
const newNums2 = nums.flat(1) // 指定深度为1
const newNums3 = nums.flat(2) // 指定深度为2

console.log(newNums) 
// [ 1, 2, 3, 4, [ 5, 6 ], [ 7, 8 ], [ 9, 10 ] ]
console.log(newNums2) 
// [ 1, 2, 3, 4, [ 5, 6 ], [ 7, 8 ], [ 9, 10 ] ]
console.log(newNums3) 
// [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]


// 2. flatMap
// flatMap( ) 方法会首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。
// flatMap 是先进行 map 操作，再做 flat 的操作，且 flatMap 中的 flat 相当于深度为1。

const nums = [10, 20, 30]
const newNums1 = nums.flatMap((item) => {
  return item * 2
})
console.log(newNums1) // [ 20, 40, 60 ]

const newNums2 = nums.map((item) => {
  return item * 2
})
console.log(newNums2) // [ 20, 40, 60 ]

// flatMap的应用场景
const messages = ['Hello Vue', 'Hello React', "I'm JavaScript"]
const words2 = messages.map((item) => {
  return item.split(' ')
})
console.log(words2)
// [ [ 'Hello', 'Vue' ], [ 'Hello', 'React' ], [ "I'm", 'JavaScript' ] ]

// 但是，如果我们使用 flatMap 来操作，最终的结果会被处理成一维数组，也就是它内部会帮我们进行扁平化。
const words = messages.flatMap((item) => {
  return item.split(' ')
})
console.log(words)
// [ 'Hello', 'Vue', 'Hello', 'React', "I'm", 'JavaScript' ]
