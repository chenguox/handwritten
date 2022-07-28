/* 
实现内置的Exclude <T, U>类型，但不能直接使用它本身。

从联合类型T中排除U的类型成员，来构造一个新的类型。

例如：

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
*/

// 解答：
type MyExclude<T, U> = T extends U ? never : T

// 测试
type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

// 解析：
// 其实等价于
type Result =
  | ('a' extends 'a' ? never : 'a')
  | ('b' extends 'a' ? never : 'b')
  | ('c' extends 'a' ? never : 'c')
