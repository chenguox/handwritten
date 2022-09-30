// 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
// k 是一个正整数，它的值小于或等于链表的长度。
// 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
// 示例 :
// 给定这个链表：1->2->3->4->5
// 当 k = 2 时，应当返回: 2->1->4->3->5
// 当 k = 3 时，应当返回: 3->2->1->4->5
// 说明 :
// 你的算法只能使用常数的额外空间。
// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。


// 递归解法
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let pre = null, cur = head;
  let p = head;
  // 下面的循环用来检查后面的元素是否能组成一组
  for(let i = 0; i < k; i++) {
      if(p == null) return head;
      p = p.next;
  }
  for(let i = 0; i < k; i++){
      let next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
  }
  // pre为本组最后一个节点，cur为下一组的起点
  head.next = reverseKGroup(cur, k);
  return pre;
};

var reverseKGroup = function(head, k) {
  let p = cur = head

  for(let i = 0, i < k, i++) {
    if(p === null) return head
      p = p.next
  }

}



// 循环解法
var reverseKGroup = function(head, k) {
  let count = 0;
  // 看是否能构成一组，同时统计链表元素个数
  for(let p = head; p != null; p = p.next) {
      if(p == null && i < k) return head;
      count++;
  }
  let loopCount = Math.floor(count / k);
  let p = dummyHead = new ListNode();
  dummyHead.next = head;
  // 分成了 loopCount 组，对每一个组进行反转
  for(let i = 0; i < loopCount; i++) {
      let pre = null, cur = p.next;
      for(let j = 0; j < k; j++) {
          let next = cur.next;
          cur.next = pre;
          pre = cur;
          cur = next;
      }
      // 当前 pre 为该组的尾结点，cur 为下一组首节点
      let start = p.next;// start 是该组首节点
      // 开始穿针引线！思路和2个一组的情况一模一样
      p.next = pre;
      start.next = cur;
      p = start;
  }
  return dummyHead.next;
};