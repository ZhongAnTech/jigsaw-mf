import { isFunction, cloneDeep } from 'lodash'
import hijackers from '../hijackers'
export function getSandbox(appName) {

    // let proxyWindow = new Proxy(window, {
    //     get: function (target, name) {
    //         if (name in target) {
    //             console.log(`success:${name}`)
    //         } else {
    //             console.log(`error:${name}`)
    //         }
    //         return target[name]
    //     },
    //     set: function (target, name, property) {
    //         return Reflect.set(target, name, property)
    //     }
    // })

    let proxyWindow = new Proxy({
        ...hijackers()
    }, {
        get: function (target, name) {
            // console.log(name, target[name])
            if (name === 'undefined') return window.undefined;
            if (isConstructable(window[name])) {
                return window[name];
            }
            if (name in target) {
                return target[name]
            }
            else if (name in window) {
                const val = window[name];
                if (typeof val === 'function') {
                    target[name] = val.bind(window)
                }
                else {
                    target[name] = window[name];
                }
            }
            return target[name]
        },
        set: function (target, name, property) {
            target[name] = property
            return true
        }
    })

    function isConstructable(fn) {
        if (typeof fn !== 'function') return false
        const constructableFunctionRegex = /^function\b\s[A-Z].*/
        const classRegex = /^class\b/
        return fn.prototype
            && Object.getOwnPropertyNames(fn.prototype).filter(k => k !== 'constructor').length
            || constructableFunctionRegex.test(fn.toString())
            || classRegex.test(fn.toString())
    }

    // let heads = proxyWindow.document.getElementsByTagName('head')
    // let srcipt = proxyWindow.document.createElement('script')
    // srcipt.src = 'http://localhost:8080/bundle.js'
    // heads[0].appendChild(srcipt)
    // let load = new Promise((resolve, reject) => {
    //     srcipt.onload = function () {
    //         resolve('done')
    //     }
    // })
    // let result = await load

    // window.name = 'this is parent'
    // let iframe = document.createElement('iframe')    
    // document.body.appendChild(iframe)
    // let proxyWindow = iframe.contentWindow

    // // for (var i in window) {
    // //     console.log(i)
    // // }
    // iframe.src = 'http://localhost:8080/blank'
    // iframe.style.display = 'none'
    // iframe.style.width = '0px;'
    // iframe.style.height = '0px;'
    // proxyWindow.name = 'this is son'
    // proxyWindow.app = window.app
    // proxyWindow.react = window.react
    // proxyWindow.ReactDOM = window.ReactDOM
    // proxyWindow.propTypes = window.propTypes
    // proxyWindow.classnames = window.classnames
    // proxyWindow.proppy = window.proppy
    // proxyWindow.proppyReact = window.proppyReact
    // proxyWindow.webpackJsonpdemo = window.webpackJsonpdemo
    // proxyWindow.demo = window.demo


    return proxyWindow
}