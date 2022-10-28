/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */


// 方法二： 使用额外的数组
var rotate = function(nums, k) {
  // 1. 创建一个新数组
  const newNums = []
  const len = nums.length
  if(k > len) k = k%len 

  // 2. 将旋转的拷贝到新数组
  for(let i = k; i > 0; i--) {
    newNums.push(nums[len - i])
  }

  // 3. 将剩下的拷贝到新数组
  for(let j = 0; j < len - k; j++) {
    newNums.push(nums[j])
  }

  // 4. 将新数组的数据移到旧数组中
  for(let k = 0; k < len; k++) {
    nums[k] = newNums[k]
  }
}


// 官方答案：
var rotate = function(nums, k) {
  const n = nums.length;

  // 1. 创建一个新数组
  const newNums = new Array(n)

  // 2. 将数组拷贝到新数组，从索引 k 开始
  // 这个 (i + k) % n 很巧妙
  for(let i = 0; i < n; i++) {
    newNums[(i + k) % n] = nums[i]
  }

  // 3. 将新数组拷贝到旧数组，实现翻转
  for(let i = 0; i < n; i++) {
    nums[i] = newNums[i]
  }
}


const nums = [1,2,3,4,5,6,7,8]
rotate(nums, 3)
console.log(nums)