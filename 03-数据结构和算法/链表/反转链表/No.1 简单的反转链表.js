// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

// 1、循环解决方案

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseList =  (head) => {
  // 边界判断
  if (!head)
      return null;
  let pre = null, cur = head;
  while (cur) {
      // 关键: 保存下一个节点的值
      let next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
  }
  return pre;
};



// 递归解决方案
let reverseList = (head) =>{
  let reverse = (pre, cur) => {
    if(!cur) return pre;
    // 保存 next 节点
    let next = cur.next;
    cur.next = pre;
    return reverse(cur, next);
  }
  return reverse(null, head);
}

