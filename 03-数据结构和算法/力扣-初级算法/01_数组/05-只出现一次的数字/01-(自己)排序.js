// https://leetcode.cn/leetbook/read/top-interview-questions-easy/x21ib6/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums.sort((a, b) => a - b)
  for(let i = 0; i < nums.length; i += 2) {
    if(nums[i] !== nums[i + 1]) {
      // 第一个元素就是只出现一次的元素
      if(i === 0) {
        if(nums[i + 1] === nums[i + 2]) return nums[0]
      }
      // 最后一个元素就是只出现一次的元素
      if(i === nums.length - 1){
        if(nums[i] === nums[i - 1]) return nums[nums.length - 1]
      }
      // 中间的情况
      if(nums[i] === nums[i - 1]) {
        return nums[i + 1]
      } else {
        return nums[i]
      }
    }
  }
};


const nums = [4,1,2,1,2]
console.log(singleNumber(nums))


// 排序
// 1. 先对数组中的元素进行排序 【1, 1, 2, 2, 3, 4, 4】
// 2. 每次取出两个元素进行比较（一前一后）
// 2.1 两个元素相同, 递增2, 进行下一次比较（比如比较1,2相同，接着比较3,4）
// 2.2 两个元素不同，前的元素更前一个比较，后的元素更后的比较，返回不相同的元素