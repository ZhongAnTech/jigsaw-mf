const http = require('http')
const url = require('url')
const fs = require('fs')
const serve = require('koa-static')
const Koa = require('koa')
const cors = require('@koa/cors')
const compress = require('koa-compress')

const app = new Koa()
app.use(cors())
app.use(compress())
app.use(serve('dist'))

app.listen(9000, () => {
  console.log('SPA Fragment Server started at 9000')
})

// const server = http.createServer((req, res) => {
//   const pathname = url.parse(req.url).pathname
//   const jsHeader = { 'Content-Type': 'application/javascript' }
//   const cssHeader = { 'Content-Type': '	text/css'}
//   switch(pathname) {
//     case '/public/bundle.js':
//       res.writeHead(200, jsHeader)
//       return fs.createReadStream('./public/bundle.js').pipe(res)
//     case '/public/main.css':
//       res.writeHead(200, cssHeader)
//       return fs.createReadStream('.//public/main.css').pipe(res)
//     default:
//       res.writeHead(200, {
//         'Content-Type': 'text/html',
//         'Link': '<http://localhost:6006/public/bundle.js>; rel="fragment-script"'
//       })
//       return res.end('')
//   }
// })

// server.listen(6006, () => {
//   console.log('SPA Fragment Server started at 6006')
// })
