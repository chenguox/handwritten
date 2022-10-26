// 选择排序
// 选择排序是从数组的开头开始，将第一个元素和其他元素作比较，
// 检查完所有的元素后，最小的放在第一个位置，接下来再开始从第二个元素开始，重复以上一直到最后。

// 5, 28, 3, 21, 11, 7, 6, 18
// =>
// [3], 28, 5, 21, 11, 7, 6, 18  
// 3, [28], 5, 21, 11, 7, 6, 18  
// 3, 5, [28], 21, 11, 7, 6, 18
// 3, 5, 6, [7], 11, 21, 28, 18
// 3, 5, 6, 7, [11], 21, 28, 18
// 3, 5, 6, 7, 11, [18], 28, 21
// 3, 5, 6, 7, 11, 18, [21], 28


const test = [5, 28, 3, 21, 11, 7, 6, 18]

// function selectSort(arr) {
//   const len = arr.length
//   // 可以不用没遍历一层就创建一次
//   let minIndex, temp

//   // 1、外层循环 i 表示第几轮，i 可以理解为数组的索引值，表示每一轮要比较的数组的索引值，最后一个值不用比较 len -1
//   for(let i = 0; i < len - 1; i++) {
//     // i 可以理解为上面的 [], 假设第一个数就是最小数
//     minIndex = i
//     // 2、内层从 j 开始，依次往后数, 找到比开头小的，互换位置
//     for(let j = i; j < len; j++) {
//       // 寻找最小数的索引值
//       if(arr[j] < arr[minIndex]){
//         minIndex = j
//       }
//     }
//     temp = arr[i]
//     arr[i] = arr[minIndex]
//     arr[minIndex] = temp
//   }

//   return arr
// }



function selectSort(arr) {
  const len = arr.length
  let temp, minIndex

  for(let i = 0; i < len - 1; i++) {
    minIndex = i
    for(let j = i + 1; j < len; j++) {
      if(arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }

    temp =  arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }

  return arr
}


console.log(selectSort(test))