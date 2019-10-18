# 
[![npm version](https://img.shields.io/npm/v/chaoxi.svg?style=flat-square)](https://www.npmjs.com/package/chaoxi)
[![coverage](https://img.shields.io/codecov/c/github/umijs/qiankun.svg?style=flat-square)](https://codecov.io/gh/freezestanley/chaoxi)
[![npm downloads](https://img.shields.io/npm/dt/chaoxi.svg?style=flat-square)](https://www.npmjs.com/package/chaoxi)

# mft

## 📦 安装

```shell
npm i chaoxi -S
```

## getting started

> 运行example
 ```
 npm install
 npm run init
 npm run run:fragment
 // open http://localhost:9100
 ```



```
// global.js

import chaoxi, { globalEvent } from 'chaoxi'
export default new chaoxi(appConfig)
```

```
.
.
.
import Chaoxi, {globalEvent} from './global'

// if is react 
componentDidMount () {
    const appinfo = [
        {
            name: "a50",
            application_name: "reactnews",
            entry: "http://912-mft-app1.dev.za-tech.net/app",
            contain: this.refs.container2,
            baseUrl: "/",
            canActive(path) {
                return window.location.pathname.startsWith(this.baseUrl);
            }
        }
        Chaoxi.registerApps(appinfo)
}

// if is vue
mounted () {
    const appinfo = [
        {
            name: "a50",
            application_name: "reactnews",
            entry: "http://912-mft-app1.dev.za-tech.net/app",
            contain: this.refs.container2,
            baseUrl: "/",
            canActive(path) {
                return window.location.pathname.startsWith(this.baseUrl);
            }
        }
        Chaoxi.registerApps(appinfo)
}      

.
.
.
```
>{
> name: "a50",    应用名需唯一
> application_name: "reactnews",  应用名需唯一
> entry: "http://912-mft-app1.dev.za-tech.net/app", //应用接入地址
> contain: this.refs.container2,           // 应用挂载容器,须在页面存在的dom元素
> baseUrl: "/",                            // 子应用的主路径
> canActive(path) {                        // 应用激活规则
>       return window.location.pathname.startsWith(this.baseUrl);
>   } 
>}

## 应用之间通讯
> 基于eventemitter2 实现的应用间通讯
> 通过使用globalEvent
> chaoxi 继承于 eventemitter2                                                                                                                                                                                                                                                                                                                
```
 const Chaoxi = new chaoxi()
 Chaoxi.on('event', 'this is event)
 Chaoxi.emit('event', 'this is event)
```
```
// master application

function BodyTop(){

  function handleTypeClick(e) {
      globalEvent.emit('father-type-click', e.currentTarget.dataset.type)
  }
  return (
    <React.Fragment>
      <div onClick={handleTypeClick}>
        提交事件
      </div>
    </React.Fragment>
  )
}


// child application 

import React from 'react';
import { globalEvent } from 'chaoxi'
import './index.scss';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        globalEvent.on('father-type-click', data => {
            console.log('data from father-type-click', data);
        })
    }
    render() {
        return (
            <div className="newsList">
                this is child
            </div>
        )
    }
}
```

## 打包
> 子应用需被打包为umd形式
> 通过postcss-selector-namespace实现css 样式隔离
> 为方便调试将项目改成多页，通过访问路径不同来实现隔离

## koa

```
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
app.use(views(path.resolve(__dirname, './dist')))
app.use(async function (ctx, next) {
  console.log(ctx.req.url)
    if (ctx.req.url === '/app') {
        return await ctx.render('app')
    } else if (ctx.req.url === '/health') {
        return ctx.body = '200'
    } else {
        return await ctx.render('index')
    }
})


app.listen(PORT, () => {
  console.log(`SPA Fragment Server started at ${PORT}`)
})

```
> 通过koa设置应用的静态资源访问路径
> 当主应用子应用发生跨域请求时候,用@koa/cors设置请求跨域
> 如果想子应用访问界面和被微服务调用页面分开访问，可在koa内设置路由
> 
