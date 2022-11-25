// 1. 在 TS 中如果一个函数没有任何的返回值，那么返回值的类型就是 void 类型


// 2. 如果返回值是 void 类型，那么我们也可以返回 undefined （TS 编译器允许这样做而已）
function sum(num1: number, num2: number): void {
  console.log(num1 + num2)

  // return 123 
  return undefined
}


// 应用场景
// 用来指定函数类型的返回值是 void
type LyricInfoType = {
  time: number
  text: string
}

function parseLyric(lyric: string): LyricInfoType[] {
  const lyricInfos: LyricInfoType[] = []
  // 解析
  return lyricInfos
}

// parseLyric 函数的数据类型为:
// (lyric: string) => LyricInfoType

// parseLyric => 函数/对象

// foo 函数不接收参数，不返回值
type FooType = () => void
const foo: FooType = () => {}


// 举个例子:(涉及函数的类型问题, 后续还会详细讲解)
// 1. 定义要求传入的函数的类型
type ExecFnType = (...args: any[]) => void

// 2. 定义一个函数，并且接收的参数也是一个函数，而且这个函数的类型必须是 ExecFnType
function delayExecFn(fn: ExecFnType) {
  setTimeout(() => {
    fn("why", 18)
  }, 1000);
}

// 3. 执行上面函数，并且传入一个匿名函数
delayExecFn((name, age) => {
  console.log(name, age)
})

export {}