const Vue = require('vue')
const fs = require('fs')
const Koa = require('koa')
const Router = require('koa-router')
const path = require('path')
const router = new Router()
const app = new Koa()
const { createBundleRenderer } = require('vue-server-renderer')
const serverBundle = require('../dist/server/vue-ssr-server-bundle.json')
const clientManifest = require('../dist/client/vue-ssr-client-manifest.json')
const send = require('koa-send')

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: fs.readFileSync(path.join(__dirname, '../dist/client/index.temp.html'), 'utf-8'),
  clientManifest
})
app.use(async(ctx, next) => {
  try {
    console.log(`request with path ${ctx.path}`)
    await next()
  } catch (err) {
    console.log(err)
    ctx.status = 500
    ctx.body = 'please try again later'
  }
})

app.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') {
    await send(ctx, '/favicon.ico', { root: path.join(__dirname, '../dist/client/') })
  } else {
    await next()
  }
})

const staticRouter = new Router({ prefix: '/resource' })

staticRouter.get('/(.*)', async (ctx) => {
  console.log('---staticRouter----', ctx)

  console.log( path.join(__dirname))
  await send(ctx, ctx.path, { root: path.join(__dirname, '../dist/client/') })
})


router.get('/(.*)', async (ctx) => {
  console.log('---ctx---', ctx)
  const html = await renderer.renderToString(ctx)
  ctx.body = html
})
// router.get('/', async (ctx) => {
//   try {
//     const html = await renderer.renderToString(ctx)
//     ctx.body = html
//   } catch(err) {
//     ctx.status = 500
//     ctx.body = err.message
//   }
// })
app.use(staticRouter.routes()).use(router.allowedMethods())
app.use(router.routes()).use(router.allowedMethods())
app.listen(3003, () => {
  console.log(`server is success on 3000 port`)
})