// 请判断一个单链表是否为回文链表。

// 示例1:
// 输入: 1 - > 2
// 输出: false

// 示例2:
// 输入: 1 - > 2 - > 2 - > 1
// 输出: true

// 这一题如果不考虑性能的限制， 其实是非常简单的。 但考虑到 O(n) 时间复杂度和 O(1) 空间复杂度， 恐怕就值得停下来好好想想了。
// 题目的要求是单链表， 没有办法访问前面的节点， 那我们只得另辟蹊径:
// 找到链表中点， 然后将后半部分反转， 就可以依次比较得出结论了。 下面我们来实现一波。

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let reverse = (pre, cur) => {
        if(!cur) return pre;
        let next = cur.next;
        cur.next = pre;
        return reverse(cur, next);
    }
    let dummyHead = slow = fast = new ListNode();
    dummyHead.next = head;
    // 注意注意，来找中点了, 黄金模板
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let next = slow.next;
    slow.next = null;
    let newStart = reverse(null, next);
    for(let p = head, newP = newStart; newP != null; p = p.next, newP = newP.next) {
        if(p.val != newP.val) return false;
    }
    return true;
};