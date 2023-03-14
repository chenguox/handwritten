;(function (window, $) {
  // 1. 在 jquery 的原型上添加一个 showlinklocation
  $.fn.showlinklocation = function () {
    // console.log(this) // jQuery 对象
    // this.append(`www.baidu.com`)
    // 需要过滤出 a 元素
    // this.filter('a').append(`www.baidu.com`)
    // 遍历 a 元素，获取链接，拼接
    this.filter('a').each(function () {
      // console.log(this) // DOM ELEMENT
      var $a = $(this)
      var link = $a.attr('href')
      $a.append(`(${link})`)
    })
    return this
  }
})(window, jQuery)
