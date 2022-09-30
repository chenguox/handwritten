给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
示例:
输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if(!root) return [];
  let queue = [];
  let res = [];
  queue.push(root);
  while(queue.length) {
      res.push(queue[0].val);
      let size = queue.length;
      while(size --) {
          // 一个size的循环就是一层的遍历，在这一层只拿最右边的结点
          let front = queue.shift();
          if(front.right) queue.push(front.right);
          if(front.left) queue.push(front.left);
      }
  }
  return res;
};