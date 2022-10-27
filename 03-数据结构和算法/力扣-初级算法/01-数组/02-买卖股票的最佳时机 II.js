// 动态规划的学习
// https://juejin.cn/post/6844903520039075847


// 最优子结构
// 边界
// 状态转移方程式

// 方法一： 动态规划
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {

// };

var prices = [7,1,5,3,6,4]

var maxProfit = function(prices) {
  const n = prices.length;
  const dp = new Array(n).fill(0).map(v => new Array(2).fill(0));
  dp[0][0] = 0, dp[0][1] = -prices[0];
  for (let i = 1; i < n; ++i) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
      dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[n - 1][0];
};


maxProfit(prices)


// 方法二：贪心

var maxProfit = function(prices) {
  let ans = 0;
  let n = prices.length;
  for (let i = 1; i < n; ++i) {
      ans += Math.max(0, prices[i] - prices[i - 1]);
  }
  return ans;
};
