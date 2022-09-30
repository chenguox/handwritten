/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let dummyHead = new ListNode();
  dummyHead.next = head;
  let fast = slow = dummyHead;
  // 零个结点或者一个结点，肯定无环
  if (fast.next == null || fast.next.next == null)
    return null;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    // 两者相遇了
    if (fast == slow) {
      let p = dummyHead;
      while (p != slow) {
        p = p.next;
        slow = slow.next;
      }
      return p;
    }
  }
  return null;
};