{/* <script src="https://cdn.bootcdn.net/ajax/libs/qs/6.10.3/qs.min.js"></script>
<script>
let URL = "http://www.baidu.com?product='iPhone 13 Pro'&price=￥9999.00"
function getUrlParams4(url){
	// 引入 qs 库时会默认挂在到全局 window 的 Qs 属性上
	// console.log(window)
	let urlStr = url.split('?')[1]
	let result = Qs.parse(urlStr)
	// 拼接额外参数
	let otherParams = {
		num:50,
		size:6.1
	}
	let str = Qs.stringify(otherParams)
	let newUrl = url + str
	return {result,newUrl}
}
console.log(getUrlParams4(URL))
</script> */}