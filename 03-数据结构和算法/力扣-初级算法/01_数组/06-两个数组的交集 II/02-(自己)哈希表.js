/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const map = new Map()
  const newNums = []
  // 遍历数组1处理成哈希表
  for(const x of nums1) {
    if(map.has(x)) {
      // console.log('map.get(x):', map.get(x))
      map.set(x, map.get(x) + 1)
    }else{
      map.set(x, 1)
    }
  }
  console.log(map)
  // 遍历数组2
  for(const x of nums2) {
    if(map.has(x)) {
      let count = map.get(x)
      if(count > 0) {
        newNums.push(x)
        count--
        map.set(x, count)
      }
    }
  }
  return newNums
};

const nums1 = [4,9,5], nums2 = [9,4,9,8,4]
const nums3 = [1,2,2,1], nums4 = [2]
const nums5 = [2,1], nums6 = [1,1]

console.log('======', intersect(nums1, nums2))
console.log('======', intersect(nums3, nums4))
console.log('======', intersect(nums5, nums6))



// 1. 创建一个Map数据结构
// 2. 遍历数组1存