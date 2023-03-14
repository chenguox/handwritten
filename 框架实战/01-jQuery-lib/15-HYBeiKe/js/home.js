$(function () {
  initHome()

  var $searchHouseInput = $('.header .house-search')
  var $searchTips = $('.header .search-tips')
  var $searchList = $('.header .search-list')
  var $searchMenuUl = $('.header .search-menu > ul')

  var homePageInfoData = {} // 首页数据
  var selectMenuKey = 'ershoufang' // 选中的菜单对应的 key
  var cacheSearchListData = [] // 缓存热门推荐数据
  var currentSearchPlaceHolder = '请输入区域、商圈或小区名开始'

  $searchHouseInput.focus(function () {
    console.log('focus')
    $searchTips.css('display', 'block')

    // 1. 搜索框有内容
    var value = $(this).val()
    if (value.trim()) {
      // 进行搜索（通过代码来模拟用户的输入事件）
      $(this).trigger('input')
      return
    }

    // 2. 搜索框没内容
    // 2.1 展示缓存中的热门推荐内容
    if (cacheSearchListData.length) {
      renderHeaderSearchTips(cacheSearchListData)
      return
    }

    // 2.2 没有缓存，请求对应的热门推荐内容
    GXAjax.get(BKAPI.HOT_RECOMMEND).then(function (res) {
      console.log(res)
      var searchListData = res.rent_house_list.list
      searchListData = searchListData.map(function (item) {
        return item.app_house_title
      })
      console.log(searchListData)

      // 渲染界面
      renderHeaderSearchTips(searchListData)

      // 缓存数据
      cacheSearchListData = searchListData
    })
  })

  $searchHouseInput.blur(function () {
    $searchTips.css('display', 'none')
  })

  $searchHouseInput.on(
    'input',
    throttle(function () {
      var value = $(this).val()
      GXAjax.get(BKAPI.HOME_SEARCH, {
        cityId: homePageInfoData.curLocation.cityCode, // 城市的id ( 来源城市的接口 )
        cityName: homePageInfoData.curLocation.city, // 城市的名称 ( 来源城市的接口 )
        channel: selectMenuKey, // 房源渠道(默认是site, 还支持：ershoufang 、xinfang、zufang、xiaoqu、shangban)
        keyword: value, // 搜索的关键字
        query: value, // 搜索的关键字
      }).then(function (res) {
        var searchTipsListData = res.data.result || []
        searchTipsListData = searchTipsListData.map(function (item) {
          return item.text
        })
        renderHeaderSearchTips(searchTipsListData)
      })
    })
  )

  $searchMenuUl.on('click', 'li', function () {
    // 1. 修改 li 高亮
    var $li = $(this)
    $li.addClass('active').siblings().removeClass('active')

    // 2. 移动箭头
    var distance = $li.position().left + $li.width() / 2 // 计算位移距离
    $('.search-menu .arrow').css('left', `${distance}px`) // 箭头移动

    // 3. 修改 placeholder
    $searchHouseInput.prop({
      placeholder: currentSearchPlaceHolder + $li.text(),
    })

    // 4. 记录 li 中绑定的 key
    selectMenuKey = $li.data().key
  })

  function initHome() {
    GXAjax.get(BKAPI.HOME_PAGE_INFO).then(function (res) {
      homePageInfoData = res // 对首页数据进行缓存

      // 1. 渲染头部地址
      renderHeaderAddress(res.curLocation.city)
      // 2. 渲染头部topBar
      renderHeaderTopBar(res.topBars)
      // 2. 渲染搜索栏
      renderHeaderSearchMenus(res.searchMenus)
      // 3. 渲染二手好房
      renderSecondHouseContent(res.secondHouse)
      // 渲染优选好房
      renderNewHouseContent(res.newHouse)
      // 渲染底部内容
      renderFooterContent(res.footerTitles)
    })
  }

  // 渲染头部地址
  function renderHeaderAddress(city) {
    $('.header .address').text(city)
  }

  // 渲染头部topBar
  function renderHeaderTopBar(list) {
    var htmlStr = ''
    list.forEach(function (item) {
      htmlStr += `<li><a href="${item.linkUrl}">${item.title}</a></li>`
    })
    $('.header .nav > ul').empty().append(htmlStr)
  }

  // 渲染搜索框提示
  function renderHeaderSearchTips(list) {
    var htmlStr = `<li><span>热门搜索</span></li>`
    list.forEach(function (item) {
      htmlStr += `<li><span>${item}</span></li>`
    })
    $searchList.empty().append(htmlStr)
  }

  // 渲染搜索菜单
  function renderHeaderSearchMenus(list) {
    var htmlStr = ''
    list.forEach(function (item, index) {
      var active = index === 0 ? 'active' : ''
      htmlStr += `<li class="item ${active}" data-key="${item.key}"><span>${item.title}</span></li>`
    })
    $searchMenuUl.empty().append(htmlStr)
  }

  // 渲染二手好房
  function renderSecondHouseContent(info) {
    $('.second-house .name').text(info.title)
    $('.second-house .sub-name').text(info.subTitle)
  }

  // 渲染优选好房
  function renderNewHouseContent(info) {
    $('.new-house .name').text(info.title)
    $('.new-house .sub-name').text(info.subTitle)
  }

  // 渲染底部内容
  function renderFooterContent(list) {
    var htmlStr = ''
    list.forEach(function (item) {
      htmlStr += `<li><a href="${item.linkUrl}">${item.title}</a></li>`
    })

    $('.footer ul').empty().append(htmlStr)
  }
})
