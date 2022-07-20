interface Todo {
  title: string
  description: string
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
}

const todo2 = updateTodo(todo1, {
  description: 'throw out trash',
})

console.log(todo2)
// { title: 'organize desk', description: 'throw out trash' }

// 源码
// Partial将类型中所有选项变为可选，即加上？
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };
// 拿到 T 的所有 key, 遍历每一个 key, 变成可选, 生成新的类型

// Partial 局部的
