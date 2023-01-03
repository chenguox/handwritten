https://leetcode.cn/problems/rotate-array/solutions/551039/xuan-zhuan-shu-zu-by-leetcode-solution-nipk/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 1. 封装一个翻转数组的方法
var reverse = (nums, start, end) => {
  while(start < end) {
    // 1.1 创建临时变量
    const temp = nums[start]
    // 1.2 借助临时变量实现对称替换
    nums[start] = nums[end]
    nums[end] = temp
    // 1.3 开始指针和结束指针向中间方向移动一位
    start += 1
    end -= 1
  }
} 

// 2. 实现旋转
var rotate = function(nums, k) {
  const n = nums.length

  // 2.1 获取 k 在数组中的索引
  k %= n
  // 2.2 翻转所有元素 
  reverse(nums, 0, n - 1) // [8,7,6,5,4,3,2,1]
  // 2.3 翻转 [0,k mod n - 1] 区间的元素
  reverse(nums, 0, k - 1) // [6,7,8,5,4,3,2,1]
  // 2.4 翻转 [k mod n - 1, n - 1] 区间的元素
  reverse(nums, k, n - 1) // [6,7,8,1,2,3,4,5]
};


const nums = [1,2,3,4,5,6,7,8]
rotate(nums, 3)
console.log(nums)
