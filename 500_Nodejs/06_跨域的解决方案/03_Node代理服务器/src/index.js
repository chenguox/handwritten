const Koa = require('koa')
const KoaRouter = require('@koa/router')

const app = new Koa()

// 方案三: Node代理服务器
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