// ES8 中新增加了 padStart 和 padEnd 方法，可以对字符串的首尾进行填充。
const str = "JavaScript"

const newStr1 = str.padStart(15,"-")
console.log(newStr1) // -----JavaScript

const newStr2 = str.padEnd(15,'-')
console.log(newStr2) // JavaScript-----


// 可以使用链式调用来实现首尾填充
const newStr3 = str.padStart(15,'=').padEnd(20,'=')
console.log(newStr3) // =====JavaScript=====


// 案例：实现身份证/银行卡只显示后4位
const cardNumber = "440234596644432221"
const lastFourCard = cardNumber.slice(-4)
const finalCard = lastFourCard.padStart(cardNumber.length, "*")
console.log(finalCard) // **************2221
