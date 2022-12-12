// 1. 联合类型的基本使用
// let foo: number | string = 'abc'
// foo = 123

// // 使用的时候要特别的小心
// if (typeof foo === 'string') {
//   console.log(foo.length)
// }

// 2. 举个🌰: 打印id
function printID(id: number | string) {
  console.log('您的ID:', id)

  // 报错
  // console.log(id.length)

  // 类型缩小
  if (typeof id === 'string') {
    console.log(id.length)
  } else {
    console.log(id)
  }
}

printID('abc')
printID(123)

export {}