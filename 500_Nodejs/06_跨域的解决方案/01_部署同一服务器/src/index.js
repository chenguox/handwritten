const Koa = require('koa')
const KoaRouter = require('@koa/router')
const static = require('koa-static')

const app = new Koa()

// 部署静态资源: 
// 直接用live server打开 index.html, 会跨域
// 部署在同一服务打开不会跨域: http://localhost:8000/index.html
app.use(static('./client'))

const userRouter = new KoaRouter({ prefix: '/users' })
userRouter.get('/list', (ctx, next) => {
  ctx.body = [
    { id: 111, name: 'aaa', age: 18 }, 
    { id: 112, name: 'bbb', age: 28 }, 
    { id: 113, name: 'ccc', age: 38 }, 
    { id: 114, name: 'ddd', age: 48 }, 
  ]
})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(8000, () => {
  console.log('koa服务器启动成功')
})