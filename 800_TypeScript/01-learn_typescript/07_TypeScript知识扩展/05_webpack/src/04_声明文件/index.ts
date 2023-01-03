// 没有声明会报错: 找不到模块“./img/kobe02.png”或其相应的类型声明
import KobeImage from './img/kobe02.png'
// 找不到模块“./vue/App.vue”或其相应的类型声明。
import App from "./vue/App.vue"

// 图片文件的使用
const imgEl = document.createElement("img")
imgEl.src = KobeImage
document.body.append(imgEl)

// webpack中需要配置对资源进行处理