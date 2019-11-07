/*!
 * easymft.js v1.0.3
 * (c) 2019-2019 ZA-FE
 * Released under the MIT License.
 */
import { importEntry } from "html-entry";
import EventEmitter from "eventemitter2";

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function() {
    var self = this,
      args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

/**
 * name: application name
 * entry: 'http://localhost:8009/'
 * contain: document.getElementById('root')
 * template: '<html>...</html>'
 */
var Fragment =
  /*#__PURE__*/
  (function() {
    function Fragment(app, parent) {
      _classCallCheck(this, Fragment);

      var cloneApp = Object.assign({}, app);
      var name = cloneApp.name,
        entry = cloneApp.entry,
        contain = cloneApp.contain,
        template = cloneApp.template,
        styles = cloneApp.styles,
        module = cloneApp.module,
        baseUrl = cloneApp.baseUrl,
        free = cloneApp.free,
        sandbox = cloneApp.sandbox;

      var _self = this;

      this.parent = parent;
      this.app = cloneApp;
      this.mounted = false;
      this.sandbox = sandbox;
      this.name = name;
      this.entry = entry;
      this.style = [];
      this.contain = contain;
      this.template = template;
      this.baseUrl = baseUrl;
      this.__module = module;
      this.parent = parent || "";
      this.__free = free;

      if (styles) {
        styles.map(function(ele) {
          _self.addStyle(ele);
        });
      }
    }

    _createClass(Fragment, [
      {
        key: "bootstrap",
        value: function bootstrap() {
          this.__module.default.bootstrap(this);
        } // export async function bootstrap() {
        //     console.log('react app bootstraped')
        //   }
        //   export async function mount(props) {
        //     ReactDOM.render(<Router/>, document.getElementById('other'))
        //   }
        //   export async function unmount() {
        //     ReactDOM.unmountComponentAtNode(document.getElementById('other'))
        //   }
      },
      {
        key: "unmount",
        value: function unmount() {
          // this.__module.unmount(this.contain)
          if (this.mounted) {
            this.__module.default.unmount(this.contain);

            this.mounted = false;
          }
        }
      },
      {
        key: "mount",
        value: function mount(props) {
          if (!this.mounted) {
            if (!this.contain) {
              console.error(
                "Application name ".concat(this.name, " contain is null")
              );
            }

            this.__module.default.mount(
              this.contain,
              this.baseUrl,
              this.app,
              this
            );

            this.mounted = true;
          }
        }
      },
      {
        key: "destroy",
        value: function destroy() {
          // unmount的时候不能释放资源，因为还有可能mount
          // 所以增加 destroy 方法，彻底释放不会再次mount的应用
          this.unmount();

          this.__free();

          this.style.map(function(e) {
            e.parentNode && e.parentNode.removeChild(e);
          });
        }
      },
      {
        key: "addStyle",
        value: function addStyle(txt) {
          var link = document.createElement("style");
          link.innerHTML = txt;
          var result = this.style.find(function(e) {
            return e.innerHTML === txt;
          });

          if (!result) {
            var heads = document.getElementsByTagName("head");

            if (heads.length) {
              heads[0].appendChild(link);
            } else {
              document.documentElement.appendChild(link);
            }

            this.style.push(link);
          }
        }
      }
    ]);

    return Fragment;
  })();

function hijackHistory() {
  if (!window.history.__EASY_MFT_DECORATED) {
    var dispatchPopStateEvent = function dispatchPopStateEvent(state) {
      var evt = null;

      try {
        evt = new PopStateEvent("popstate", {
          state: state
        });
      } catch (err) {
        evt = document.createEvent("PopStateEvent");
        evt.initPopStateEvent("popstate", false, false, state);
      }

      window.dispatchEvent(evt);
    };

    window.history.__EASY_MFT_DECORATED = true;
    var originalPushState = window.history.pushState;

    window.history.pushState = function(state) {
      var result = originalPushState.apply(this, arguments);
      dispatchPopStateEvent(state);
      return result;
    };

    var originalReplaceState = window.history.replaceState;

    window.history.replaceState = function(state) {
      var result = originalReplaceState.apply(this, arguments);
      dispatchPopStateEvent(state);
      return result;
    };
  }
}

function hijackers() {
  hijackHistory();
  var listeners = [],
    timeouts = [],
    intervals = [];
  return {
    addEventListener: function addEventListener() {
      window.addEventListener.apply(window, arguments);
      var args = Array.prototype.slice.call(arguments);
      listeners.push(args);
    },
    setTimeout: (function(_setTimeout) {
      function setTimeout() {
        return _setTimeout.apply(this, arguments);
      }

      setTimeout.toString = function() {
        return _setTimeout.toString();
      };

      return setTimeout;
    })(function() {
      timeouts.push(setTimeout.apply(null, arguments));
    }),
    setInterval: (function(_setInterval) {
      function setInterval() {
        return _setInterval.apply(this, arguments);
      }

      setInterval.toString = function() {
        return _setInterval.toString();
      };

      return setInterval;
    })(function() {
      intervals.push(setInterval.apply(null, arguments));
    }),
    __easy_mft_free: function __easy_mft_free() {
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
      listeners.forEach(function(args) {
        return window.removeEventListener.apply(window, args);
      });
    }
  };
}

function getSandbox() {
  var proxyWindow = new Proxy(_objectSpread2({}, hijackers()), {
    get: function get(target, name) {
      if (name === "undefined") return window.undefined;

      if (isConstructable(window[name])) {
        return window[name];
      }

      if (name in target) {
        return target[name];
      } else if (name in window) {
        var val = window[name];

        if (typeof val === "function") {
          target[name] = val.bind(window);
        } else {
          target[name] = window[name];
        }
      }

      return target[name];
    },
    set: function set(target, name, property) {
      target[name] = property;

      if (/^webpackJsonp/.test(name)) {
        window[name] = target[name];
      }

      return true;
    }
  });

  function isConstructable(fn) {
    if (typeof fn !== "function") return false;
    var constructableFunctionRegex = /^function\b\s[A-Z].*/;
    var classRegex = /^class\b/;
    return (
      (fn.prototype &&
        Object.getOwnPropertyNames(fn.prototype).filter(function(k) {
          return k !== "constructor";
        }).length) ||
      constructableFunctionRegex.test(fn.toString()) ||
      classRegex.test(fn.toString())
    );
  }

  return proxyWindow;
}

var globalEvent =
  window.__EASY_MFT_GLOBAL_EVENT ||
  (window.__EASY_MFT_GLOBAL_EVENT = new EventEmitter({
    wildcard: true,
    delimiter: ".",
    newListener: false,
    maxListeners: Number.MAX_VALUE,
    verboseMemoryLeak: false
  }));

var CtrlApps =
  /*#__PURE__*/
  (function(_EventEmitter) {
    _inherits(CtrlApps, _EventEmitter);

    function CtrlApps(appinfo) {
      var _this;

      _classCallCheck(this, CtrlApps);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(CtrlApps).call(this)
      );
      _this.sonApplication = [];
      _this.info = appinfo;
      _this.__baseUrl = appinfo.baseUrl || ""; // 主引用的基本url

      _this.name = appinfo.name || "";
      _this.classNamespace = appinfo.classNamespace || "";
      _this.parent = "";

      _this.listenPopstate();

      return _this;
    }

    _createClass(CtrlApps, [
      {
        key: "findApp",
        value: function findApp(name) {
          return this.sonApplication.find(function(app) {
            return name === app.name;
          });
        }
      },
      {
        key: "unregisterApps",
        value: function unregisterApps(name) {
          var index = this.sonApplication.findIndex(function(app) {
            return name === app.name;
          });

          if (index !== -1) {
            this.sonApplication[index].destroy();
            this.sonApplication.splice(index, 1);
          }
        }
      },
      {
        key: "_getAppBaseUrl",
        value: function _getAppBaseUrl(app) {
          return this.baseUrl + (app.baseUrl || "");
        }
      },
      {
        key: "registerApps",
        value: function registerApps(applist) {
          if (applist instanceof Array) {
            applist.forEach(this.registerApp.bind(this));
          } else if (_typeof(applist) === "object") {
            this.registerApp(applist);
          } else {
            console.error(
              "object or array is wanted but get " + _typeof(applist)
            );
          }
        }
      },
      {
        key: "registerApp",
        value: (function() {
          var _registerApp = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee(app) {
              var oldApp,
                dll,
                template,
                execScripts,
                getExternalScripts,
                getExternalStyleSheets,
                result,
                _result,
                sandbox;

              return regeneratorRuntime.wrap(
                function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        // handle duplicate registration
                        oldApp = this.findApp(app.name);

                        if (!oldApp) {
                          _context.next = 7;
                          break;
                        }

                        oldApp.mounted = false;
                        oldApp.contain = app.contain;
                        oldApp.baseUrl = this._getAppBaseUrl(app);

                        if (oldApp.app.canActive(oldApp.baseUrl)) {
                          oldApp.mount();
                        }

                        return _context.abrupt("return");

                      case 7:
                        if (typeof app.canActive !== "function") {
                          app.canActive = function(path) {
                            return window.location.pathname.startsWith(path);
                          };
                        }

                        dll = window.__easy_mft_dlls =
                          window.__easy_mft_dlls || {};

                        if (!dll[app.entry]) {
                          _context.next = 17;
                          break;
                        }

                        result = dll[app.entry];
                        template = result.template;
                        execScripts = result.execScripts;
                        getExternalScripts = result.getExternalScripts;
                        getExternalStyleSheets = result.getExternalStyleSheets;
                        _context.next = 25;
                        break;

                      case 17:
                        _context.next = 19;
                        return importEntry(app.entry);

                      case 19:
                        _result = _context.sent;
                        template = _result.template;
                        execScripts = _result.execScripts;
                        getExternalScripts = _result.getExternalScripts;
                        getExternalStyleSheets = _result.getExternalStyleSheets;
                        dll[app.entry] = _result;

                      case 25:
                        sandbox = getSandbox();
                        Promise.all([
                          execScripts(sandbox),
                          getExternalScripts(sandbox),
                          getExternalStyleSheets()
                        ]).then(function(values) {
                          var script = values[0];
                          var extScript = values[1];
                          var styles = values[2];
                          app.template = template;
                          app.styles = styles;
                          var _module = sandbox[app.applicationName];

                          if (_module && _module.__esModule) {
                            app.module = sandbox[app.applicationName];
                            app.sandbox = sandbox;
                            app.free = sandbox.__easy_mft_free;

                            var baseurl = this._getAppBaseUrl(app);

                            app.baseUrl = baseurl.replace(/\/+/, "/");
                            var sonApplication = new Fragment(app, this);
                            sonApplication.bootstrap(); // delete window[app.name]
                            // window[app.name] = null

                            if (
                              sonApplication.app.canActive(
                                sonApplication.app.baseUrl
                              )
                            ) {
                              sonApplication.mount();
                            }

                            this.sonApplication.push(sonApplication);
                          } else {
                            console.error(
                              "child application ".concat(
                                app.applicationName,
                                " not found"
                              )
                            );
                          }
                        });

                      case 27:
                      case "end":
                        return _context.stop();
                    }
                  }
                },
                _callee,
                this
              );
            })
          );

          function registerApp(_x) {
            return _registerApp.apply(this, arguments);
          }

          return registerApp;
        })()
      },
      {
        key: "unregisterAllApps",
        value: function unregisterAllApps() {
          this.sonApplication.forEach(function(item) {
            item.destroy();
          });
          this.sonApplication = [];
        }
      },
      {
        key: "listenPopstate",
        value: function listenPopstate() {
          var _this2 = this;

          window.addEventListener("popstate", function() {
            _this2.sonApplication.forEach(function(item) {
              if (item.app.canActive(item.app.baseUrl)) {
                item.mount();
              } else {
                item.unmount();
              }
            });
          });
        }
      },
      {
        key: "fullUrl",
        get: function get() {
          return (this.parent.fullUrl || "") + this.__baseUrl;
        }
      },
      {
        key: "baseUrl",
        get: function get() {
          return this.__baseUrl;
        },
        set: function set(val) {
          this.__baseUrl = val;
        }
      }
    ]);

    return CtrlApps;
  })(EventEmitter);

export default CtrlApps;
export { globalEvent };
