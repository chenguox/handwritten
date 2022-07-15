interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>

// type TodoPreview = {
//   title: string;
//   completed: boolean;
// }

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}

// 源码
// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };

// K extends keyof T
// 意思就是： K参数的取值范围 限制在 T中提取出来的key范围内
// P in k
// 可以理解为 循环
// T[P]
// 意思和 JS 的[]取值一样
