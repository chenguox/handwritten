// 有一楼梯共M级，刚开始时你在第一级，若每次只能跨上一级或二级，要走上第M级，共有多少种走法？
// 分析： 这个问题要倒过来看，要到达n级楼梯，只有两种方式，从（n-1）级 或 （n-2）级到达的。
// 所以可以用递推的思想去想这题，假设有一个数组s[n], 
// 那么s[1] = 1（由于一开始就在第一级，只有一种方法）， s[2] = 1（只能从s[1]上去 没有其他方法）。
// 那么就可以推出s[3] ~ s[n]了。
// 下面继续模拟一下， s[3] = s[1] + s[2]， 因为只能从第一级跨两步， 或者第二级跨一步。

// const arr = [1]      1   只有一种方法
// const arr = [1, 2]    1  只能从 1 跨一步上去
// const arr = [1, 2, 3]  2 只能从 1 跨两步上去 或者 2 跨一步上去  

// const arr = [1, 2, 3, 4]  爬到楼梯2有一种方法 ，爬到楼梯3有两种方法，楼梯 2,3 都可以到达楼梯4，所以是 1+2=3 


function walkTimes(n) {
  if(n === 1 || n === 2) {
    return 1
  } else {
    return walkTimes(n - 1) + walkTimes(n -2)
  }
}

console.log(walkTimes(6))