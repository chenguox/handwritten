// 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

// 说明: 1 ≤ m ≤ n ≤ 链表长度。

// 示例:

// 输入: 1->2->3->4->5->NULL, m = 2, n = 4
// 输出: 1->4->3->2->5->NULL

// 1、循环解法
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let count = n - m;
  let p = dummyHead = new ListNode();
  let pre, cur, start, tail;
  // 将 p 节点和链表关联起来
  p.next = head;
  // 把 p 指向 m 的前一个节点
  for(let i = 0; i < m - 1; i ++) {
      p = p.next;
  }
  // 保存前节点
  front = p;
  // 同时保存区间首节点  ,尾节点就是下一个节点
  pre = tail = p.next;
  cur = pre.next;
  // 区间反转
  for(let i = 0; i < count; i++) {
      let next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
  }
  // 前节点的 next 指向区间末尾
  front.next = pre;
  // 区间首节点的 next 指向后节点(循环完后的cur就是区间后面第一个节点，即后节点)
  tail.next = cur;
  return dummyHead.next;
};


// 2、递归解法。
var reverseBetween = function(head, m, n) {
  // 递归反转函数
  let reverse = (pre, cur) => {
    if(!cur) return pre;
    // 保存 next 节点
    let next = cur.next;
    cur.next = pre;
    return reverse(cur, next);
  }
  let p = dummyHead = new ListNode();
  dummyHead.next = head;
  let start, end; //区间首尾节点
  let front, tail; //前节点和后节点
  for(let i = 0; i < m - 1; i++) {
    p = p.next;
  }
  front = p; //保存前节点
  start = front.next;
  for(let i = m - 1; i < n; i++) {
    p = p.next;
  }
  end = p;
  tail = end.next; //保存后节点
  end.next = null;
  // 开始穿针引线啦，前节点指向区间首，区间首指向后节点
  front.next = reverse(null, start);
  start.next = tail;
  return dummyHead.next;
}