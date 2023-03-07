class ArrayStack<T> {
  private data: T[] = []

  push(element: T): void {
    this.data.push(element)
  }

  pop(): T | undefined {
    return this.data.pop()
  }

  peek(): T | undefined {
    return this.data[this.data.length - 1]
  }

  isEmpty(): boolean {
    return this.data.length === 0
  }

  size(): number {
    return this.data.length
  }
}

// 创建存储字符串的栈实例
const stack1 = new ArrayStack<string>()

// 创建存储数字的栈实例
const stack = new ArrayStack<number>()

export {}
