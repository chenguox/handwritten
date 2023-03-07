// 使用 ts 可以进行类型校验，避免上面的错误

function getLength(args: string | any[]) {
  return args.length
}

getLength('abcdef')

getLength(['aaa', 'bbb', 'ccc', 123])

// 会提示错误
getLength(123)


export {}