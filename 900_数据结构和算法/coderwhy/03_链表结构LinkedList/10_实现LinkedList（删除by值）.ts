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

  // 封装私有方法
  // 根据position获取到当前的节点(不是节点的value, 而是获取节点)
  private getNode(position: number): Node<T> | null {
    let index = 0
    let current = this.head
    while (index++ < position && current) {
      current = current.next
    }

    return current
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
      const previous = this.getNode(position - 1)
      newNode.next = previous!.next
      previous!.next = newNode
    }

    this.size++

    return true
  }

  // 删除方法
  removeAt(position: number): T | null {
    // 1. 越界的判断
    if (position < 0 || position >= this.size) return null

    // 2. 判断是否删除第一个节点
    let current = this.head
    if (position === 0) {
      this.head = current?.next ?? null
    } else {
      const previous = this.getNode(position - 1)
      previous!.next = previous?.next?.next ?? null
    }

    // 3. 更新节点个数
    this.size--

    return current?.value ?? null
  }

  // 获取方法
  get(position: number): T | null {
    if (position < 0 || position >= this.size) return null
    return this.getNode(position)?.value ?? null
  }

  // 更新方法
  update(value: T, position: number): boolean {
    if (position < 0 || position >= this.size) return false
    // 获取对应位置的节点，直接更新即可
    const currentNode = this.getNode(position)
    currentNode!.value = value
    return true
  }

  // 根据值获取对应位置的索引
  indexOf(value: T): number {
    // 从第一个节点开始，向后遍历
    let index = 0
    let current = this.head
    while (current) {
      if (current.value === value) {
        return index
      }
      current = current.next
      index++
    }

    return -1
  }

  // 删除方法: 根据value删除节点
  remove(value: T): T | null {
    const position = this.indexOf(value)
    return this.removeAt(position)
  }
}

const linkedList = new LinkedList<string>()
linkedList.append('aaa')
linkedList.append('bbb')
linkedList.append('ccc')
linkedList.append('ddd')

console.log('------------ 测试get ------------')
console.log(linkedList.get(0))
console.log(linkedList.get(1))
console.log(linkedList.get(2))

linkedList.traverse()

export {}
