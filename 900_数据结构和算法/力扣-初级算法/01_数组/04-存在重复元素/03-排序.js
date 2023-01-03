// 给你一个整数数组 nums 。
// 如果任一值在数组中出现 至少两次 ，返回 true ；
// 如果数组中每个元素互不相同，返回 false 。


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  // 1. 对数组进行排序
  nums.sort((a, b) => a - b)
  // 2. 比较相邻的两个元素
  let short = 0, fast = 1;  // 用官方的好点，自己的还会多用了两个变量的空间
  const n = nums.length
  while(fast < n) {
    if(nums[short] === nums[fast]) return true
    
    short++
    fast++
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


// 1. 按照大小进行排序
// 2. 每次判断相邻的两个元素是否相等
// 2.1 相等就是存在重复元素
var containsDuplicate = function(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
      if (nums[i] === nums[i + 1]) {
          return true;
      }
  }
  return false;
};


