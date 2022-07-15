interface Todo {
  title: string
}

const todo: Readonly<Todo> = {
  title: 'Delete inactive users',
}

todo.title = 'Hello'
// Cannot assign to 'title' because it is a read-only property.

// 源码
// Readonly 这个操作就是将每一个属性变成只读
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}
