// lib.dom.d.ts
const h2El = document.createElement("h2")
h2El.textContent = "Hello TypeScript"
document.body.append(h2El)

// 可以通过 target 和 lib 来决定哪些内置类型声明是可以使用的
// lib.es2015.d.ts
// const promise = new Promise((resolve, reject) => {})
// console.log(message.startsWith("Hello"))