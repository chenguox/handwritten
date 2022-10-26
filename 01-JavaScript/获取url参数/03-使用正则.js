let URL = "http://www.baidu.com?name=Tom&friend=Jerry"
// let URL = "http://www.baidu.com?name=张三&age=25&sex=男&wife=小红"
function getUrlParams3(url){
	// \w+ 表示匹配至少一个(数字、字母及下划线), [\u4e00-\u9fa5]+ 表示匹配至少一个中文字符
        /*
            该正则匹配规则表示: 首先匹配的格式是 xxx = xxx
                               然后 (\w+|[\u4e00-\u9fa5]+) 表示至少匹配一个(字母、数字、下划线) 或者至少匹配一个中文字符
        */
	let pattern = /(\w+|[\u4e00-\u9fa5]+)=(\w+|[\u4e00-\u9fa5]+)/ig;
        
        /*
            该正则匹配规则表示: 首先匹配的格式是 xxx = xxx
                               然后[^?|&] 表示匹配的字符中不能含有 ? 或者 &，后面同理
        */ 
        // let pattern = /([^?|&]+)=([^&]+)/ig;
        
	let result = {};
	url.replace(pattern, ($, $1, $2)=>{
		result[$1] = $2;
	})
	return result
}
console.log(getUrlParams3(URL))