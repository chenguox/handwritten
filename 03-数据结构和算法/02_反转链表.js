// 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

// 原链表 
// head -> 1 -> 2 -> 3 -> 4 -> 5 -> null
// 反正链表
// null <- 1 <- 2 <- 3 <- 4 <- 5 

// head -> 4 -> 3 -> 2 -> 1


head -> 1 -> 2 -> 3 -> 4 -> 5 -> null

最后的递归
head = 4
reverseHead = 5

4.next.next = head => null -> 4
4.next = null => 5 -> null




// 迭代
const reverseList = function(head) {
  
}
// head -> 1 -> 2 -> 3 -> 4 -> 5 -> null
// null

reverseHead = reverseList(1)
reverseHead = reverseList(2)
reverseHead = reverseList(3)
reverseHead = reverseList(4)
reverseHead = reverseList(5)

reverseHead = reverseList(head.next)
reverseList(head.next) = reverseList(head.next.next)
reverseList(head.next.next) = reverseList(head.next.next.next)
reverseList(head.next.next.next) = head


reverseHead = reverseList(head.next)
reverseHead = (reverseHead = reverseList(head.next.next))
reverseHead = (reverseHead = (reverseHead = reverseList(head.next.next.next)))
reverseHead = (reverseHead = (reverseHead = (reverseHead = reverseList(head.next.next.next.next))))
reverseHead = (reverseHead = (reverseHead = (reverseHead = (reverseHead = reverseList(head.next.next.next.next.next)))))
reverseHead = (reverseHead = (reverseHead = (reverseHead = (reverseHead = 5))))
reverseHead = (reverseHead = (reverseHead = (4 = ( = 5))))
reverseHead = (reverseHead = (3 = (4 = ( = 5))))
reverseHead = (2 = (3 = (4 = ( = 5))))
1 = (2 = (3 = (4 = ( = 5))))

