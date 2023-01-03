// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

// 示例:

// 给定 1->2->3->4, 你应该返回 2->1->4->3.

var swapPairs = function(head) {
  if(head == null || head.next == null) 
      return head;
  let dummyHead = p = new ListNode();
  let node1, node2;
  dummyHead.next = head;
  while((node1 = p.next) && (node2 = p.next.next)) {
      node1.next = node2.next;
      node2.next = node1;
      p.next = node2;
      p = node1;
  }
  return dummyHead.next;
};


