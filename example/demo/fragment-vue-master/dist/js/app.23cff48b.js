(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("easyMft"), require("vueRouter"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["easyMft", "vueRouter", "vue"], factory);
	else if(typeof exports === 'object')
		exports["vuemaster"] = factory(require("easyMft"), require("vueRouter"), require("vue"));
	else
		root["vuemaster"] = factory(root["easyMft"], root["vueRouter"], root["vue"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__37cc__, __WEBPACK_EXTERNAL_MODULE__6389__, __WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"app": 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({}[chunkId]||chunkId) + "." + {"chunk-397f360c":"e51a54f9","chunk-74de73d7":"191c9cc9"}[chunkId] + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"chunk-397f360c":1,"chunk-74de73d7":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({}[chunkId]||chunkId) + "." + {"chunk-397f360c":"026c97b2","chunk-74de73d7":"4dbef1eb"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:9099/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonpvuemaster"] = window["webpackJsonpvuemaster"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors","chunk-common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/main-app.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stanleyxu/Documents/mft/yinyang的副本/example/demo/fragment-vue-master/src/main-app.js */"02b5");


/***/ }),

/***/ "02b5":
/*!*************************!*\
  !*** ./src/main-app.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "96cf");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_stanleyxu_Documents_mft_yinyang_example_demo_fragment_vue_master_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "3b8d");
/* harmony import */ var _Users_stanleyxu_Documents_mft_yinyang_example_demo_fragment_vue_master_node_modules_core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es6.array.iterator.js */ "cadf");
/* harmony import */ var _Users_stanleyxu_Documents_mft_yinyang_example_demo_fragment_vue_master_node_modules_core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_stanleyxu_Documents_mft_yinyang_example_demo_fragment_vue_master_node_modules_core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_stanleyxu_Documents_mft_yinyang_example_demo_fragment_vue_master_node_modules_core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es6.promise.js */ "551c");
/* harmony import */ var _Users_stanleyxu_Documents_mft_yinyang_example_demo_fragment_vue_master_node_modules_core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_stanleyxu_Documents_mft_yinyang_example_demo_fragment_vue_master_node_modules_core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_stanleyxu_Documents_mft_yinyang_example_demo_fragment_vue_master_node_modules_core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/core-js/modules/es6.object.assign.js */ "f751");
/* harmony import */ var _Users_stanleyxu_Documents_mft_yinyang_example_demo_fragment_vue_master_node_modules_core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_stanleyxu_Documents_mft_yinyang_example_demo_fragment_vue_master_node_modules_core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_stanleyxu_Documents_mft_yinyang_example_demo_fragment_vue_master_node_modules_core_js_modules_es7_promise_finally_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/core-js/modules/es7.promise.finally.js */ "097d");
/* harmony import */ var _Users_stanleyxu_Documents_mft_yinyang_example_demo_fragment_vue_master_node_modules_core_js_modules_es7_promise_finally_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Users_stanleyxu_Documents_mft_yinyang_example_demo_fragment_vue_master_node_modules_core_js_modules_es7_promise_finally_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App.vue */ "3dfd");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./router */ "41cb");
/* harmony import */ var _config_application_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config/application.json */ "88fe");
var _config_application_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/application.json */ "88fe", 1);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global */ "2919");











_global__WEBPACK_IMPORTED_MODULE_10__["globalEvent"].on('global-test-event', function (e) {
  alert('global-test-event:' + e);
});
vue__WEBPACK_IMPORTED_MODULE_6___default.a.config.productionTip = false;
var instance = null;
/* harmony default export */ __webpack_exports__["default"] = ({
  bootstrap: function () {
    var _bootstrap = Object(_Users_stanleyxu_Documents_mft_yinyang_example_demo_fragment_vue_master_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(parent) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('react app bootstraped');
              _global__WEBPACK_IMPORTED_MODULE_10__["default"].parent = parent;

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function bootstrap(_x) {
      return _bootstrap.apply(this, arguments);
    }

    return bootstrap;
  }(),
  mount: function () {
    var _mount = Object(_Users_stanleyxu_Documents_mft_yinyang_example_demo_fragment_vue_master_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(contain, baseUrl, appinfo) {
      var div;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('props from main framework', contain, baseUrl);
              _global__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl = baseUrl;
              div = document.createElement('div');
              contain.appendChild(div);
              instance = new vue__WEBPACK_IMPORTED_MODULE_6___default.a({
                router: Object(_router__WEBPACK_IMPORTED_MODULE_8__["default"])(baseUrl),
                render: function render(h) {
                  return h(_App_vue__WEBPACK_IMPORTED_MODULE_7__["default"]);
                }
              }).$mount(div);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function mount(_x2, _x3, _x4) {
      return _mount.apply(this, arguments);
    }

    return mount;
  }(),
  unmount: function () {
    var _unmount = Object(_Users_stanleyxu_Documents_mft_yinyang_example_demo_fragment_vue_master_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // CtrlApps.sonApplication.map((ele) => {
              //   ele.unmount()
              // })
              _global__WEBPACK_IMPORTED_MODULE_10__["default"].unregisterAllApps();
              instance.$destroy();
              instance.$el.parentNode.removeChild(instance.$el);
              instance = null;

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function unmount() {
      return _unmount.apply(this, arguments);
    }

    return unmount;
  }()
});

/***/ }),

/***/ "37cc":
/*!**************************!*\
  !*** external "easyMft" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__37cc__;

/***/ }),

/***/ "6389":
/*!****************************!*\
  !*** external "vueRouter" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6389__;

/***/ }),

/***/ "8bbf":
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ })

/******/ });
});
//# sourceMappingURL=app.23cff48b.js.map