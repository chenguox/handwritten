import ArrayQueue from './01_实现队列结构-数组'

function hotPotato(names: string[], num: number): number {
  if (names.length === 0) return -1

  // 1. 定义一个队列
  const queue = new ArrayQueue<string>()

  // 2. 将数据放入到队列中
  for (let i = 0; i < names.length; i++) {
    queue.enqueue(names[i])
  }

  // 3. 淘汰的规则
  while (queue.size() > 1) {
    // 1/2 不淘汰
    for (let i = 0; i < 3; i++) {
      const name = queue.dequeue()
      if (name) queue.enqueue(name)
    }
    // 3 淘汰
    queue.dequeue()
  }

  // 4. 取出最后一人
  const leftName = queue.dequeue()!
  const index = names.indexOf(leftName)
  return index
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
const index = hotPotato(names, 4)
console.log(index)
