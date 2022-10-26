// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
普通的层次遍历
给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

示例:
  3
  / \
9  20
  /  \
  15   7

结果应输出:
[
  [3],
  [9,20],
  [15,7]
]

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root) return [];
  let queue = [];
  let res = [];
  let level = 0;
  queue.push(root);
  let temp;
  while(queue.length) { // 3 9 20
      res.push([]);
      let size = queue.length; // 2
      // 注意一下: size -- 在层次遍历中是一个非常重要的技巧
      while(size --) {
          // 出队
          let front = queue.shift();
          res[level].push(front.val);
          // 入队
          if(front.left) queue.push(front.left);
          if(front.right) queue.push(front.right);
      }        
      level++;
  }
  return res;
};