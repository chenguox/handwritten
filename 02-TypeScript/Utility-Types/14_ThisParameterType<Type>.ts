// Extracts the type of the this parameter for a function type, or unknown if the function type has no this parameter.
// 为一个函数类型提取参数的类型，如果函数没有参数则类型为 unknown

function toHex(this: Number) {
  return this.toString(16)
}

function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n)
}
// (parameter) n: Number

type ThisParameterType<T> = T extends (this: infer U, ...args: never) => any
  ? U
  : unknown
