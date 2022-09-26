const test = [1, 28, 3, 21, 11, 7, 6, 18]

function bubleSort(arr) {
  const len = arr.length

  // 1、外层循环，从最大值递减，因为内层是两两比较，因此最外层当 >=2 时即可停止
  for(let outer = len; outer > 1; outer--){
    // 2、内层是两两比较，从 0 开始，比较 inner 与 inner+1, 因此临界条件为 inner + 1 < outer，即 inner < outer - 1
    for(let inner = 0; inner < outer - 1; inner++){
      if(arr[inner] > arr[inner + 1]){
        // 2.1 借助临时变量
        // let temp = arr[inner]
        // arr[inner] = arr[inner + 1]
        // arr[inner + 1] = temp
        // 2.2 利用 ES6 解构
        [arr[inner], arr[inner+1]] = [arr[inner+1], arr[inner]]
      }
    }
  }

  return arr
}

console.log(bubleSort(test))