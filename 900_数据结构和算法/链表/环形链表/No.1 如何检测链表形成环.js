// 方法一: Set 判重
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = (head) => {
  let set = new Set();
  let p = head;
  while(p) {
      // 同一个节点再次碰到，表示有环
      if(set.has(p)) return true;
      set.add(p);
      p = p.next;
  }
  return false;
}

// 方法二: 快慢指针
var hasCycle = function(head) {
  let dummyHead = new ListNode();
  dummyHead.next = head;
  let fast = slow = dummyHead;
  // 零个结点或者一个结点，肯定无环
  if(fast.next == null || fast.next.next == null) 
      return false;
  while(fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
      // 两者相遇了
      if(fast == slow) {
          return true;
      }
  } 
  return false;
};


