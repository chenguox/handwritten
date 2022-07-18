// 提取需要的类型
type T0 = Extract<"a" | "b" | "c", "a" | "f">;
// type T0 = "a"

type T1 = Extract<string | number | (() => void), Function>;
// type T1 = () => void



// type Extract<T, U> = T extends U ? T : never