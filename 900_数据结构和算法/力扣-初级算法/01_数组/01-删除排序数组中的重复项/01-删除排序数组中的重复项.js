// 题目
// https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2gy9m/


// 题解：
// https://leetcode.cn/problems/remove-duplicates-from-sorted-array/solutions/728105/shan-chu-pai-xu-shu-zu-zhong-de-zhong-fu-tudo/

// 几个注意点：
// 1、必须通过原地修改数组的方法,使用 O(1) 的空间复杂度完成

/**
 * @param {number[]} nums
 * @return {number}
 */

// 方法一：双指针
var removeDuplicates = function(nums) {
  const n = nums.length
  // 1. 长度为零的数组不需要处理
  if(n === 0) return 0;

  // 2. 设置快慢指针，快指针用于遍历，慢指针用来指向替换的元素
  let fast = 1, short = 1

  // 3. 遍历元素
  while(fast < n) {
    // 3.1 如果快指针指向的当前元素不等于上一个元素
    if(nums[fast - 1] !== nums[fast]) {
      // 将当前元素替换慢指针指向的元素
      nums[short] = nums[fast]
      // 慢指针移向下一个替换元素
      short++
    }
    // 3.2 快指针指向下一个比较元素
    fast++
  }

  // 4. 返回数组长度（等同于慢指针）
  return short
};

// 测试
const nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums), nums)


// 1. 定义一个 map 数据结构来进行数据存储
// 2. 每次取出数组中的元素与map中的数据对比
//   2.1 没有该数据，存储进去
//   2.2 存在该数据，表示重复，去除

