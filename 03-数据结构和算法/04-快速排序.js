// 找到一个数作为参考，比这个数字大的放在数字左边，比它小的放在右边； 
// 然后分别再对左边和右变的序列做相同的操作:

const test = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 19, 50, 48]

function quickSort(arr) {
  // 递归出口, 数组长度小于等于1的时候
  if (arr.length <= 1) {
    return arr
  }

  let left = []
  let right = []
  // 获取数组第一个元素，并从数组从删除
  let current = arr.splice(0, 1)

  // 循环数组，将元素分到 left 和 right 数组

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < current) {
      left.push(arr[i]) // 小于 current 放在左边
    } else {
      right.push(arr[i]) // 大于 current 放在右边
    }
  }

  // left 和 right 递归
  return quickSort(left).concat(current, quickSort(right))
}

console.log(quickSort(test))