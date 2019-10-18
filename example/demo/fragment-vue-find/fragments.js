const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
const serve = require('koa-static')
const cors = require('@koa/cors')
const Koa = require('koa')
const views = require('koa-views')
const app = new Koa()
const config = require('./config/application.json')
const compress = require('koa-compress')
const PORT = config.port

app.use(cors())
app.use(serve('dist'))
const options = { threshold: 2048 }
app.use(compress())
app.use(serve('../fragment-vue-child/dist'))
app.use(views(path.resolve(__dirname, './dist')))
app.use(async function (ctx, next) {
  console.log(ctx.req.url)
    if (ctx.req.url === '/app') {
        return await ctx.render('app')
    } else {
        return await ctx.render('index')
    }
})


app.listen(PORT, () => {
  console.log(`SPA Fragment Server started at ${PORT}`)
})
