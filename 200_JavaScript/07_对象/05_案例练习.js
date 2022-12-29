// 定义商品对象
var product = {
  name: '鞋子',
  desc: '非常棒!!!',
  price: 99,
  brand: 'nike',
}

// 定义手机对象
var phone = {
  name: 'iPhone 13 Pro Max',
  desc: '对iPhone的描述信息',
  price: 888,
  callPhone: function (phoneNum) {
    console.log('打电话给某人:', phoneNum)
  },
  playGame: function (gameName) {
    console.log('玩游戏:', gameName)
  },
}

// 定义用户对象
var user = {
  id: 1111111,
  account: 'coderwhy',
  nickname: 'coderwhy',
  password: 'xxx123',
  avatarURL: '图片地址',
  role: {
    id: 110,
    name: '管理员',
    createTime: '2033-03-03',
  },
}
