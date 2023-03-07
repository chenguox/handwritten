class Person {
  constructor(public name: string) {
    this.name = name
  }

  test() {
    console.log('test')
  }
}

type bar = typeof Person

const p: InstanceType<typeof Person> = new Person('aaa')

export {}
