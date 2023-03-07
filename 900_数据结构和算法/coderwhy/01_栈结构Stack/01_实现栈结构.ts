// 栈：受限的线性结构，后进先出
/**
 * 栈的操作：
 * push(element): 添加
 * pop(): 移除
 * peek(): 看一眼
 * isEmpty(): 为空？
 * size(): 个数
 */

// 封装一个栈
class ArrayStack {
  // 定义一个数组/链表，用于存储元素
  private data: any[] = []

  // 定义栈中相关的操作方法
  // push方法：将一个元素压入到栈中
  push(element: any): void {
    this.data.push(element)
  }

  // pop方法：将栈顶的元素弹窗栈（返回出去，并且从栈顶移除掉）
  pop(): any {
    return this.data.pop()
  }

  // peek方法：看一眼栈顶元素，但是不进行任何的操作
  peek(): any {
    return this.data[this.data.length - 1]
  }

  // isEmpty: 判断栈是否为空
  isEmpty(): boolean {
    return this.data.length === 0
  }

  // 返回栈的数据个数
  size(): number {
    return this.data.length
  }
}

// 创建Stack的实例
const stack1 = new ArrayStack()
stack1.push('aaa')
stack1.push('bbb')
stack1.push('ccc')
console.log(stack1)

console.log(stack1.peek())
console.log(stack1.pop())
console.log(stack1.pop())
console.log(stack1.pop())

console.log(stack1.isEmpty())
console.log(stack1.size())

export {}
