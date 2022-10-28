// 给你一个整数数组 nums 。
// 如果任一值在数组中出现 至少两次 ，返回 true ；
// 如果数组中每个元素互不相同，返回 false 。


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let count
  for(let i = 0; i < nums.length; i++) {
    for(let j = 0; j < nums.length; j++) {
      if(nums[i] === nums[j]) {
        count++
      }
    }
    if(count >= 2) {
      return true
    }else{
      count = 0
    }
  }
  return false
};


// 测试
const nums = [1,1,1,3,3,4,3,2,4,2]

console.log(containsDuplicate(nums))


// 1.双重循环暴力破解
// 外循环：获取每个元素
// 内循环：将每个元素，与数组中的每个值比较，有相同 count + 1
