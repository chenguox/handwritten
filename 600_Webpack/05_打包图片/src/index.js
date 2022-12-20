import "./css/style.css"
import myImage from "./images/zznh.png"

// 创建 img 元素
const imgEl = document.createElement("img")
imgEl.src = myImage
document.body.append(imgEl)


// 创建 div 元素
const divBgEl = document.createElement("div")
divBgEl.classList.add("img-bg")
document.body.append(divBgEl)