import IStack from './IStack'

class LinkedStack<T> implements IStack<T> {
  // 创建一个链表结构

  push(element: T): void {
    throw new Error('Method not implemented.')
  }
  pop(): T | undefined {
    throw new Error('Method not implemented.')
  }
  peer(): T | undefined {
    throw new Error('Method not implemented.')
  }
  isEmpty(): boolean {
    throw new Error('Method not implemented.')
  }
  size(): number {
    throw new Error('Method not implemented.')
  }
}
