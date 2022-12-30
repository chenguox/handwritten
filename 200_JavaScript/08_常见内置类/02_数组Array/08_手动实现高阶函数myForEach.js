var names = ["aaa", "bbb", "ccc", "ddd"]

// forEach 函数
for (var i = 0; i < names.length; i++) {
  console.log(names[i])
}


// 版本一:
function myForEach(fn) {
  for (var i = 0; i < names.length; i++) {
    fn(names[i], i, names)
  }
}

myForEach(function(item, index, names) {
  console.log("------", item, index, names)
})


// 版本二:
function myForEach(fn, arr) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr)
  }
}

myForEach(function(item, index, names) {
  console.log("------", item, index, names)
}, names)


// 版本三:
function myForEach(fn) {
  for (var i = 0; i < this.length; i++) {
    fn(this[i], i, this)
  }
}

names.myForEach(function(item, index, names) {
  console.log("------", item, index, names)
})


// 版本四:
Array.prototype.myForEach = function(fn, thisArgs) {
  for (var i = 0; i < this.length; i++) {
    fn(this[i], i, this)
  }
}