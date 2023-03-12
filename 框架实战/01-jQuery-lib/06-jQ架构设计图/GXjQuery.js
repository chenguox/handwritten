;(function (global, factory) {
  factory(global)
})(window, function (window) {
  // 执行 jQuery 函数，返回一个 jQuery 对象
  function GXjQuery(selector) {
    // 创建一个对象返回
    return new GXjQuery.fn.init(selector)
  }

  // 原型方法
  GXjQuery.prototype = {
    constructor: GXjQuery,
    extend: function () {},
    text: function () {},
    ready: function () {},
    // ...
  }

  // 类方法
  GXjQuery.noConflict = function () {}
  GXjQuery.isArray = function () {}
  GXjQuery.map = function () {}
  //...
  GXjQuery.fn = GXjQuery.prototype

  // 构造函数（创建 jQuery 对象）
  GXjQuery.fn.init = function (selector) {
    // 假值放回空对象
    if (!selector) return this

    // 拿到 DOM Element 源码
    var el = document.querySelector(selector)
    this[0] = el
    this.length = 1

    // css 选择器
    return this // 构造函数中 this 表示创建的对象
  }

  GXjQuery.fn.init.prototype = GXjQuery.fn

  window.GXjQuery = window.$ = GXjQuery
})
