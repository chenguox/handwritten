// 多维数组 flatten
// 将多维数组转化为一维数组。

// 示例:

// [1, [2, [3, [4, 5]]], 6] -> [1, 2, 3, 4, 5, 6]

/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 * @return {Integer[]}
 */
let flatten = (nestedList) => {
  let result = [];
  let fn = function (target, ary) {
    for (let i = 0; i < ary.length; i++) {
      let item = ary[i];
      if (Array.isArray(ary[i])) {
        fn(target, item);
      } else {
        target.push(item);
      }
    }
  }
  fn(result, nestedList)
  return result;
}

