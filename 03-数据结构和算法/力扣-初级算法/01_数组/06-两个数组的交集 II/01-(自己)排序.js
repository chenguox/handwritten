/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  const n1 = nums1.length
  const n2 = nums2.length
  const newNums = []
  let x = 0, y = 0;
  while(x < n1 && y < n2) {
    // console.log('nums1[x]:', nums1[x], 'nums2[y]:', nums2[y])
    if(nums1[x] < nums2[y]) {
      x++
    }else if(nums1[x] > nums2[y]){
      y++
    }else {
      newNums.push(nums1[x])
      x++
      y++
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


// 排序
// 1. 对数组1和数组2的内部元素进行排序
// 2. 给数组1和数组2创建对应的指针，各自指向第一个元素
// 3. 循环(只要两个指针都没有遍历)
// 3.1 如果指针指向的两个值相等，那么两者都加1
// 3.2 如果两个指针指向的两个值不相等
// 3.2.1 比较两者的大小 小的指针向前移动一位

// [4, 5, 9]
// [4, 4, 8, 9, 9]