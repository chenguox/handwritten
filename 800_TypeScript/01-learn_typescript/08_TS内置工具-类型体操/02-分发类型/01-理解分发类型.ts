// 这里的 any 可以当做是 string | number 的联合类型 

type toArray<T> = T extends any ? T[] : never

// 如果传入的类型符合条件any的, 将返回该类型的数组
// 如: 传入 number 类型, 符合条件  string | number , 返回 number 的数组类型
type NumArray = toArray<number>
// 如: 传入 string 类型, 符合条件 string | number, 返回 string 类型的数组
type StrArray = toArray<string>


// 但是, 当我们传入的类型是联合类型 string | number, 如下:
type NumAndStrArray = toArray<number | string>
// 那么返回的类型是 number[] | string[] 而不是 (number | string) []
// 即会依次拿出来比较返回, 再形成联合类型, 这就是分发类型

// 即 一个联合类型 进行 extends, 会进行分发, 即拆开