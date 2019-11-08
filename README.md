# A micro-frontend solution.

[![npm version](https://img.shields.io/npm/v/easy-mft.svg?style=flat-square)](https://www.npmjs.com/package/easy-mft)[![npm downloads](https://img.shields.io/npm/dt/easy-mft.svg?style=flat-square)](https://www.npmjs.com/package/easy-mft)

## Introduction

easy-mft is a micro-frontend solution for assembling mutiple micro-applications into the main application to make the site perform like a Single-Page application!

- support any JavaScript user interface librarys. such as React, vue etc... as long as you can control when to mount/unmout your application!
- support comunications between micro-applications.

## Terminology

`micro-application` a small application that can be assembled into a large application.

`main-application` the main application that host one or many `micro-application`

## Installation

```shell
npm i easy-mft -S
```

## Adapt existing application to a micro-application

1. add a config

```javascript
// src/config/application.json
{
     // a unique name for your application.
    "name": "reactchild",
    // the url base path your site serves  e.g. /your/path.
    "baseUrl": "/",
    // for css isolation. should be unique.
    "classNamespace": "reactchild",
    // your applicaion must be built as a library, and this is the library name. [used by webpack]
    "library": "reactfather",
    // assets must be linked by absolute path. [used by webpack]
    "publicPath": "http://localhost:9100"
}
```

2. create easy-mft instance. it's a good convention to put your global variables into one single module instead of assigning it to `window`

```javascript
import EasyMft from "easy-mft";
import appConfig from "../config/application.json"; // created by step 1

export const appPool = new EasyMft(appConfig);
export const other_global_var = "your data";
```

3. add an new entry file

```jsx
// src/index-app.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { appPool } from "./global";

export default {
  // triggered when your code is executed but before mount
  bootstrap() {
    console.log("react app bootstraped");
  },
  mount(contain, baseUrl) {
    appPool.baseUrl = baseUrl;
    ReactDOM.render(<App baseUrl={baseUrl} />, contain);
  },
  unmount(contain) {
    appPool.unregisterApps();
    ReactDOM.unmountComponentAtNode(contain);
  }
};
```

4. update webapck config

```javascript
{
    /**  omit the othe config    **/
    entry: {
      // your other entry
      app: './src/index-app.js'
    },
    output: {
      // your other config
      publicPath: config.publicPath,
      libraryTarget: 'umd',
      library: config.library
    }
}
```

## Adapt existing application to a main-application

1. add a config

```javascript
// src/config/application.json
{
     // a unique name for your application.
    "name": "reactfather",
    // the url base path your site serves  e.g. /your/path.
    "baseUrl": "/"
}
```

2. create easy-mft instance. it's a good convention to put your global variables into one single module instead of assigning it to `window`

```javascript
import EasyMft from "easy-mft";
import appConfig from "../config/application.json"; // created by step 1

export const appPool = new EasyMft(appConfig);
export const other_global_var = "your data";
```

## Example

> 运行 example

```
npm install
npm run init
npm run run:fragment
// open http://localhost:9100
```

```
// global.js

import ctrlapp, { globalEvent } from 'easy-mft'
export default new ctrlapp(appConfig)
```

```
.
.
.
import Ctrlapp, {globalEvent} from './global'

// if is react
componentDidMount () {
    const appinfo = [
        {
            name: "a50",                            // 应用名需唯一
            applicationName: "reactnews",          // 应用模块名需唯一
            entry: "http://912-mft-app1.dev.za-tech.net/app", //应用接入地址
            contain: this.refs.container2,          // 应用挂载容器,须在页面存在的dom元素
            baseUrl: "/",                           // 子应用的主路径
            canActive(path) {                       // 应用激活规则
                return window.location.pathname.startsWith(this.baseUrl);
            }
        }
        Ctrlapp.registerApps(appinfo)
}

// if is vue
mounted () {
    const appinfo = [
        {
            name: "a50",
            applicationName: "reactnews",
            entry: "http://912-mft-app1.dev.za-tech.net/app",
            contain: this.refs.container2,
            baseUrl: "/",
            canActive(path) {
                return window.location.pathname.startsWith(this.baseUrl);
            }
        }
        Ctrlapp.registerApps(appinfo)
}

.
.
.
```

## 子应用

```
export default {
  bootstrap: async function bootstrap(parent) {
    console.log('react app bootstraped');
    Ctrlapp.parent = parent
  },
  mount: async function mount(contain, baseUrl, appinfo, parent) {
    Ctrlapp.parent = parent

    console.log('parent::', parent)
    Ctrlapp.baseUrl = baseUrl;
    console.log('this is news mount')
    console.log(contain)
    ReactDOM.render(<App baseUrl={baseUrl}  appinfo={appinfo}/>, contain)
  },
  unmount: async function unmount(contain) {
    ReactDOM.unmountComponentAtNode(contain)
  }
}
```

> 子应用输出 3 个方法
> bootstrap - 创建时运行
> mount - 被挂载时运行
> unmount - 卸载时运行

## 应用之间通讯

> 基于 eventemitter2 实现的应用间通讯
> 通过使用 globalEvent
> easy-mft 继承于 eventemitter2

```
 const Ctrlapp = new ctrlapp()
 Ctrlapp.on('event', 'this is event)
 Ctrlapp.emit('event', 'this is event)
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
import { globalEvent } from 'easy-mft'
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

> 子应用需被打包为 umd 形式
> 通过 postcss-selector-namespace 实现 css 样式隔离
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

> 通过 koa 设置应用的静态资源访问路径
> 当主应用子应用发生跨域请求时候,用@koa/cors 设置请求跨域
> 如果想子应用访问界面和被微服务调用页面分开访问，可在 koa 内设置路由

## html entry

默认将页面内最后一个 js 为整个引用的入口文件，如最后一个非启动 js 可使用 entry 标签

```
<script src='http://localhost:3000/a.js' entry>
```

如 html 内 js 不想被执行，可使用 ignore

```
<script src='http://localhost:3000/a.js' ignore>
```

## Tips

1. 当前路径下有子应用时,router path 不要使用 exact 绝对匹配，否则导致子应用不显示
2. 子应用的 webpack publicPath 请带上主域 ex: http://localhost:9001, 因当子应用嵌入主应用时当前地址为主应用,导致资源调用不出
3. 子应用打包需采用 umd 模式, 设置唯一的 library
4. 主应用在开发模式下,嵌入的子应用不为开发模式，因被嵌入后热更新丢失导致失败
5. 注意主应用调用子应用的跨域问题

## License

[MIT](http://opensource.org/licenses/MIT)
