// 插入排序核心--扑克牌思想： 就想着自己在打扑克牌，接起来一张，放哪里无所谓，
// 再接起来一张，比第一张小，放左边，继续接，可能是中间数，就插在中间....依次

const test = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

// function insertSort(arr) {
//   let len = arr.length

//   // 从第二个开始循环 i=1
//   for (let i = 1; i < len; i++) {
//     for(let j = i; j > 0; j--) {
//       // 可以理解为往前冒泡了
//       if(arr[j] < arr[j-1]){
//         // 大的 arr[j-1] => arr[j]
//         // 小的 arr[j] => arr[j-1]
//         [arr[j],arr[j-1]] = [ arr[j-1] , arr[j]]
//       }
//     }
//   }

//   return arr
// }

// console.log(insertSort(test))


// 冒泡排序、选择排序、插入排序的时间复杂度都是 O(n^2)



function insertSort(arr) {

  const len = arr.length

  for(let i = 1; i < len; i++) {
    for(let j = i; j > 0; j--) {
      if(arr[j] < arr[j-1]) {
        [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
      }
    }
  }

  return arr
}

console.log(insertSort(test))