// 通过 * 将模块功能放到一个模块功能对象(a module object) 上
import * as ppp from './person'

console.log(ppp.name)
ppp.sayHello()