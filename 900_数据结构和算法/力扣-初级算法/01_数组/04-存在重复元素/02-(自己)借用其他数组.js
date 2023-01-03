// 给你一个整数数组 nums 。
// 如果任一值在数组中出现 至少两次 ，返回 true ；
// 如果数组中每个元素互不相同，返回 false 。


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const n = nums.length
  const newNums = new Array(n)
  for(let i = 0; i < n - 1; i++) {
    newNums[i] = nums[i]
    // console.log('newNums', newNums)
    // console.log('nums:', nums)

    if(newNums.includes(nums[i + 1])) return true
  }
  return false
};


// 测试
const nums = [1,1,1,3,3,4,3,2,4,2]
const nums2 = [1,2,3,1]
const nums3 = [1,2,3,4]

console.log(containsDuplicate(nums))
console.log(containsDuplicate(nums2))
console.log(containsDuplicate(nums3))


// 1. 借用其他数组
// 外循环：获取每个元素
// 内循环：将每个元素，与数组中的每个值比较，有相同 count + 1
