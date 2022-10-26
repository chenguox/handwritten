// 转成如下树结构
const obj = {
  id: 1,
  name: '部门1',
  pid: 0,
  children: [
    {
      id: 2,
      name: '部门2',
      pid: 1,
      children: [],
    },
    {
      id: 3,
      name: '部门3',
      pid: 1,
      children: [
        {
          id: 4,
          name: '部门4',
          pid: 3,
          children: [
            {
              id: 5,
              name: '部门5',
              pid: 4,
              children: [],
            },
          ],
        },
      ],
    },
  ],
}

function toArr(obj, res = []) {
  res.push(obj)
  if(obj.children && obj.children.length) {
    for(const item of obj.children) {
      toArr(item, res)
    }
  }
  return res
}

console.log(toArr(obj))

// [
//   { id: 1, name: '部门1', pid: 0, children: [ [Object], [Object] ] },
//   { id: 2, name: '部门2', pid: 1, children: [] },
//   { id: 3, name: '部门3', pid: 1, children: [ [Object] ] },
//   { id: 4, name: '部门4', pid: 3, children: [ [Object] ] },
//   { id: 5, name: '部门5', pid: 4, children: [] }
// ]
