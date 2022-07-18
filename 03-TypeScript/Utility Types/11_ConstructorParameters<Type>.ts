type T0 = ConstructorParameters<ErrorConstructor>
// type T0 = [message?: string]

type T1 = ConstructorParameters<FunctionConstructor>
// type T1 = string[]

type T2 = ConstructorParameters<RegExpConstructor>
// type T2 = [pattern: string | RegExp, flags?: string]

type T3 = ConstructorParameters<any>
// type T3 = unknown[]

type T4 = ConstructorParameters<Function>
// Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
// Type 'Function' provides no match for the signature 'new (...args: any): any'.
// type T4 = never

interface ErrorConstructor {
  new (message?: string): Error
  (message?: string): Error
  readonly prototype: Error
}

interface FunctionConstructor {
  /**
   * Creates a new function.
   * @param args A list of arguments the function accepts.
   */
  new (...args: string[]): Function
  (...args: string[]): Function
  readonly prototype: Function
}
