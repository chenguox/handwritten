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
    const newNode = new Node<T>(value)

    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }

    this.size++
  }

  // 遍历链表的方法
  traverse() {
    const values: T[] = []

    let current = this.head
    while (current) {
      values.push(current.value)
      current = current.next
    }

    console.log(values.join('->'))
  }

  // 插入方法
  insert(value: T, position: number) {
    if (position < 0 || position > this.size) return false

    const newNode = new Node<T>(value)

    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let index = 0
      let previous: Node<T> | null = null
      let current = this.head
      while (index++ < position && current) {
        previous = current
        current = current.next
      }
      newNode.next = current
      previous!.next = newNode
    }

    this.size++

    return true
  }

  // 删除方法
  removeAt(position: number): T | null {
    // 1. 越界的判断
    if (position < 0 || position > this.size) return null

    // 2. 判断是否删除第一个节点
    let current = this.head
    if (position === 0) {
      this.head = current?.next ?? null
    } else {
      let index = 0
      let previous: Node<T> | null = null
      while (index++ < position && current) {
        previous = current
        current = current.next
      }
      // 找到前一个元素和要删除的元素后
      previous!.next = current?.next ?? null
    }

    // 3. 更新节点个数
    this.size--

    return current?.value ?? null
  }
}

const linkedList = new LinkedList<string>()
linkedList.append('aaa')
linkedList.append('bbb')
linkedList.append('ccc')
linkedList.append('ddd')

linkedList.removeAt(2)
// linkedList.removeAt(0)

linkedList.traverse()

export {}
