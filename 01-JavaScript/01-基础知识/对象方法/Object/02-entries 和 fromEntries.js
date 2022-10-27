const obj = {
  name: '小明',
  age: 18,
  hobby: ['篮球','乒乓球']
}

// 1. 对象
const objEntries = Object.entries(obj);
console.log(objEntries) 
// [ [ 'name', '小明' ], [ 'age', 18 ], [ 'hobby', [ '篮球', '乒乓球' ] ] ]

objEntries.forEach(item=>{
  console.log(item[0],item[1])
})
// name 小明
// age 18
// hobby [ '篮球', '乒乓球' ]


// 2. 数组
const arrEntries = Object.entries(['aaa','bbb','ccc'])
console.log(arrEntries)
// [ [ '0', 'aaa' ], [ '1', 'bbb' ], [ '2', 'ccc' ] ]


// 3. 字符串
const strEntries = Object.entries('abcd')
console.log(strEntries)
// [ [ '0', 'a' ], [ '1', 'b' ], [ '2', 'c' ], [ '3', 'd' ] ] 



// ============ fromEntries

const obj = {
  name: '小明',
  age: 18,
}

const entries = Object.entries(obj)
console.log(entries)
// [ [ 'name', '小明' ], [ 'age', 18 ] ]

// 手动转成对象
const entries = [ [ 'name', '小明' ], [ 'age', 18 ] ]
const newObj = {}
for (const entry of entries) {
  newObj[entry[0]] = entry[1]
}

console.log(newObj)
// { name: '小明', age: 18 }


// fromEntries 
const entries = [ [ 'name', '小明' ], [ 'age', 18 ] ]
// 使用 fromEntries 方法
const newObj = Object.fromEntries(entries)
console.log(newObj)
// { name: '小明', age: 18 }



// 应用场景：
const queryString = 'name=小明&age=18&height=1.88'
const queryParams = new URLSearchParams(queryString)
console.log(queryParams)
// URLSearchParams { 'name' => '小明', 'age' => '18', 'height' => '1.88' }
for (const param of queryParams) {
  console.log(param)
}
// [ 'name', '小明' ]
// [ 'age', '18' ]
// [ 'height', '1.88' ]
const paramObj = Object.fromEntries(queryParams)
console.log(paramObj)
// { name: '小明', age: '18', height: '1.88' }
