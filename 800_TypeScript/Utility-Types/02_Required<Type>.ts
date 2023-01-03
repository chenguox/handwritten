interface Props {
  a?: number
  b?: string
}

const obj: Props = { a: 5 }

const obj2: Required<Props> = { a: 5 }
// Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.

// 源码
// 将类型中所有选项变为必选，去除所有？
// type Required<T> = {
//   [P in keyof T]-?: T[P];
// };
