// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const n = digits.length
  for(let i = n - 1; i >= 0; i--) {
    if(digits[i] != 9) {
      digits[i] += 1
      return digits
    }else{
      digits[i] = 0
    }
  }

  // 9999的情况
  const newDigits = new Array(n + 1).fill(0);
  newDigits[0] = 1

  // 或者 digits.unshift(1);

  return newDigits
};

var digits = [4,3,2,1]
console.log(plusOne(digits))

// 第一种情况：
// 最后一个元素小于9，直接加1，返回

// 第二中情况：
// 最后一个元素等于9，进1位，直到进一位的数小于9，返回

// 第三种情况：
// 直到第一位都是9，得再向前进一位