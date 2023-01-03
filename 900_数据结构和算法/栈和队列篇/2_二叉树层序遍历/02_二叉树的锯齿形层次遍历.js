https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/

给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
例如：
给定二叉树 [3,9,20,null,null,15,7], 输出应如下:
    3
   / \
  9  20
    /  \
   15   7
复制代码返回锯齿形层次遍历如下：
[
  [3],
  [20,9],
  [15,7]
]

var zigzagLevelOrder = function(root) {
  if(!root) return [];
  let queue = [];
  let res = [];
  let level = 0;
  queue.push(root);
  let temp;
  while(queue.length) {
      res.push([]);
      let size = queue.length;
      while(size --) {
          // 出队
          let front = queue.shift();
          res[level].push(front.val);
          if(front.left) queue.push(front.left);
          if(front.right) queue.push(front.right);
      }  
      // 仅仅增加下面一行代码即可
      if(level % 2) res[level].reverse();      
      level++;
  }
  return res;
};