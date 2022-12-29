var obj = {
  name: "cgx",
  "my friend": "kobe",
  "eating something": function() {
    console.log("eating~")
  }
}

console.log(obj["my friend"])

console.log(obj.name)
console.log(obj["name"])


obj["eating something"]()

var eatKey = "eating something"
obj[eatKey]()
