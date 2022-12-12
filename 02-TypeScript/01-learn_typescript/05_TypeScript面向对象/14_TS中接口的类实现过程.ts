interface IKun {
  name: string
  age: number
  slogan: string

  palyBasketball: () => void
}

interface IRun {
  running: () => void
}

const ikun: IKun = {
  name: 'cgx',
  age: 18,
  slogan: "你干嘛!",
  palyBasketball: function() {}
}

// 作用: 接口被类实现
class Person implements IKun, IRun {
  name: string
  age: number
  slogan: string

  palyBasketball() {

  }
  running() {

  }
}

const ikun2 = new Person()
const ikun3 = new Person()
const ikun4 = new Person()
console.log(ikun2.name, ikun2.age, ikun2.slogan)
ikun2.palyBasketball()
ikun2.running()

export {}