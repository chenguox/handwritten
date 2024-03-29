将两个有序链表合并为一个新的有序链表并返回。
新链表是通过拼接给定的两个链表的所有节点组成的。
示例:
输入：1->3->4, 1->2->4
输出：1->1->2->3->4->4


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
  const merge = (l1, l2) => {
      if(l1 == null) return l2;
      if(l2 == null) return l1;
      if(l1.val > l2.val) {
          l2.next = merge(l1, l2.next);
          return l2;
      }else {
          l1.next = merge(l1.next, l2);
          return l1;
      }
  }
  return merge(l1, l2);
};