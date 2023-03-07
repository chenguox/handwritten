import ListNode from './面试题_ListNode'

function reverseList(head: ListNode | null): ListNode | null {
  // 1. 如果使用的是递归，那么递归必须有结束条件
  if (head === null || head.next === null) return head

  // 2. 递归到倒数第二个节点开始反转指针
  const newHead = reverseList(head?.next ?? null)

  // 完成想要做的操作是在这个位置
  // 第一次来到这里的时候, 是倒数第二个节点
  head.next.next = head
  head.next = null

  return newHead
}

// 模拟数据进行测试
const node1 = new ListNode(1)
node1.next = new ListNode(2)
node1.next.next = new ListNode(3)

const newHead = reverseList(node1)

let current = newHead
while (current) {
  console.log(current.val)
  current = current.next
}

export {}
