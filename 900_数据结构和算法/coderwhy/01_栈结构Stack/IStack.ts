import IList from '../types/IList'

// 定义栈的接口
interface IStack<T> extends IList {
  push(element: T): void
  pop(): T | undefined
  // peer(): T | undefined
  // isEmpty(): boolean
  // size(): number
}

export default IStack
