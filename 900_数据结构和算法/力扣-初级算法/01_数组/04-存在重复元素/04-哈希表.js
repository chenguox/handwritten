/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  // 1. 创建一个哈希表
  const set = new Set()

  // 2. 循环，先判断在表中是否有该元素，没有就存进表里，继续遍历
  for(const value of nums) {
    if(set.has(value)) return true
    set.add(value)
  }

  // 3. 没有重复，返回false
  return false
};


// 测试
const nums = [1,1,1,3,3,4,3,2,4,2]
const nums2 = [1,2,3,1]
const nums3 = [1,2,3,4]

console.log(containsDuplicate(nums))
console.log(containsDuplicate(nums2))
console.log(containsDuplicate(nums3))