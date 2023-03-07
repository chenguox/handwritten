class Node<T> {
  value: T
  next: Node<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

class LinkedList<T> {
  head: Node<T> | null = null
  size: number = 0

  get length(): number {
    return this.size
  }

  // 追加节点
  append(value: T) {
    // 1. 根据 value 创建一个新节点
    const newNode = new Node<T>(value)

    // 2. 判断 this.head 是否为 null
    if (!this.head) {
      this.head = newNode
    } else {
      // 链表不为空
      let current = this.head
      while (current.next) {
        current = current.next
      }
      // current 肯定是指向最后一个节点的
      current.next = newNode
    }

    // 3. size++
    this.size++
  }
}

const linkedList = new LinkedList<string>()
console.log(linkedList.head)

export {}
