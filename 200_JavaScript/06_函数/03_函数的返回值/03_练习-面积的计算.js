// 练习一: 传入宽高, 返回面积
function getRectangleArea(width, height) {
  // var area = width * height
  // return area
  return width * height
}

// 练习二: 传入半径 radius, 计算圆形的面积
function getCircleArea(radius) {
  return Math.PI * radius * radius
}
var area3 = getCircleArea(10)
var area4 = getCircleArea(25)
console.log("area3:", area3)
console.log("area4:", area4)