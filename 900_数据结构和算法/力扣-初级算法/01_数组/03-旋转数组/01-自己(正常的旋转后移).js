/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 方法一： 正常旋转后移
var rotate = function(nums, k) {
  const len = nums.length

  if(k > len) k = k - len 

  let current
  // 1. 外循环是 k 的旋转次数
  for(let i = 0; i < k; i++) {
    // 1.1 获取要被旋转的元素
    current = nums[len - 1]
    // 1.2 从倒数第二到第一个元素依次向后移动覆盖，腾出第一个元素
    for(let j = len - 1; j > 0; j--) {
      nums[j] = nums[j - 1]
    }
    // 1.3 将被旋转的元素替换第一个元素，完成一次旋转
    nums[0] = current
  }
};


const nums = [1,2,3,4,5,6,7,8]
rotate2(nums, 3)
console.log(nums)
