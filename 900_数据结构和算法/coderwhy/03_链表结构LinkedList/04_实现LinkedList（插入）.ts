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
    // 1. 越界判断
    if (position < 0 || position > this.size) return false

    // 2. 创建一个新节点
    const newNode = new Node<T>(value)

    // 3. 判断是否需要插入头部
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

    // 4. 更新节点数
    this.size++

    return true
  }
}

const linkedList = new LinkedList<string>()
linkedList.append('aaa')
linkedList.append('bbb')
linkedList.append('ccc')
linkedList.append('ddd')

linkedList.insert('xxx', 2)

linkedList.traverse()

export {}
