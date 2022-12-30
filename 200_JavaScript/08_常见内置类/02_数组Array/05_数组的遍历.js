var names = ["abc", "cba", "nba", "mba"]

// 普通的for循环
for (var i = 0; i < names.length; i++) {
  console.log(names[i])
}


// for...in
for (var index in names) {
  console.log(index, names[index])
}


// for...of
for (var item of names) {
  console.log(item)
}