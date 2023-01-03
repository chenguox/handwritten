const s1 = Symbol()
const s2 = Symbol()

const obj = {
  name: 'cgx',
  age: 18,
  friend: {
    name: 'bbb'
  },
  say: function () {
    return 'Hello World'
  },
  [s1]: "abc",
  s2: s2
}

const info = JSON.parse(JSON.stringify(obj))

obj.friend.name = 'aaa'
console.log(info);

// 拷贝不了函数,对 Symbol 是无效，不能有循环引用嵌套