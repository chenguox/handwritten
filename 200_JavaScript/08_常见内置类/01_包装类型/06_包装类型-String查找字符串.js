var message = "my name is cgx."
var name = "cgx"

// 需求: 判断一个字符串中是否有另外一个字符串
// 1. indexof(searchString, fromIndex)
// 返回值: 
// 情况一: 搜索到, 搜索字符串所在索引位置
// 情况二: 没有搜索到, 返回-1
var index = message.indexOf(name)
console.log(index) // 11
if (index !== -1) {
  console.log("message中包含name")
} else {
  console.log("message中不包含name")
}

// 2. includes: ES6 中新增一个方法, 就是用来判断包含关系
if (message.includes(name)) {
  console.log("message中包含name")
}

// 需求: 判断是否以XXX开头, 是否以XXX结尾
// 3. startWith: 是否以XXX开头
if (message.startsWith("my")) {
  console.log("message以my开头")
}

// 4. endWith: 是否以XXX结尾
if (message.endsWith("cgx")) {
  console.log("message以cgx结尾")
}


// 需求: 替换掉message中的cgx为kobe
// 5. replace 替换字符串
var newMessage = message.replace("cgx", "kobe")
console.log(message)
console.log(newMessage)

// 可以接收一个回调函数, 做复杂的处理操作, 也就是先执行回调函数, 再对返回值进行替换
var newName = "kobe"
var newMessage2 = message.replace("cgx", function() {
  return (newName + "aaa").toUpperCase()
})
console.log(newMessage2)