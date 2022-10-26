// 给你一个数组
const arr = [
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
]

// 转成如下树结构
const obj = {
  id: 1,
  name: "部门1",
  pid: 0,
  children: [
    {
      id: 2,
      name: "部门2",
      pid: 1,
      children: []
    },
    {
      id: 3,
      name: "部门3",
      pid: 1,
      children: [
        {
          id: 4,
          name: "部门4",
          pid: 3,
          children: [
            {
              id: 5,
              name: "部门5",
              pid:4,
              children: []
            }
          ]
        }
      ]
    }
  ]
}


// 递归方式

// 从数组中获取对应id的子元素
function getChildren(arr, id) {
  const result = []
  for(const item of arr) {
    if(item.pid === id) {
      // 插入子元素，每个子元素的 children 通过回调生成
      result.push({...item, children: getChildren(arr, item.id)})
    }
  }

  return result
}

// console.log(getChildren(arr, 0))
// [ { id: 1, name: '部门1', pid: 0, children: [ [Object], [Object] ] } ]

function getNode(arr, id) {
  const node = arr.find(item => item.id === id)
  node.children = []
  for(const item of arr) {
    if(item.pid === id) {
      node.children.push(getNode(arr, item.id))
    }
  }
  return node
}

console.log(getNode(arr, 1))
