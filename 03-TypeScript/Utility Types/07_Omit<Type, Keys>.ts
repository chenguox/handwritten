interface Todo {
  title: string
  description: string
  completed: boolean
  createdAt: number
}

type TodoPreview = Omit<Todo, 'description'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
  createdAt: 1615544252770,
}

todo
// const todo: TodoPreview

type TodoInfo = Omit<Todo, 'completed' | 'createdAt'>

const todoInfo: TodoInfo = {
  title: 'Pick up kids',
  description: 'Kindergarten closes at 5pm',
}

todoInfo
// const todoInfo: TodoInfo

// 源码
type Omit<T, K extends string | number | symbol> = {
  [P in Exclude<keyof T, K>]: T[P]
}
