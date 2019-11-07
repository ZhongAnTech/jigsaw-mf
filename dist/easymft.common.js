/*!
 * easymft.js v1.0.3
 * (c) 2019-2019 ZA-FE
 * Released under the MIT License.
 */
(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports)
    : typeof define === "function" && define.amd
    ? define(["exports"], factory)
    : ((global = global || self), factory((global.easymft = {})));
})(this, function(exports) {
  "use strict";

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
          asyncGeneratorStep(
            gen,
            resolve,
            reject,
            _next,
            _throw,
            "next",
            value
          );
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
        Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        );
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

  var firstGlobalProp, secondGlobalProp, lastGlobalProp;
  function getGlobalProp() {
    var cnt = 0;
    var lastProp;
    var hasIframe = false;

    for (var p in global) {
      if (!global.hasOwnProperty(p)) continue; // 遍历 iframe，检查 window 上的属性值是否是 iframe，是则跳过后面的 first 和 second 判断

      for (var i = 0; i < window.frames.length; i++) {
        var frame = window.frames[i];

        if (frame === global[p]) {
          hasIframe = true;
          break;
        }
      }

      if (
        !hasIframe &&
        ((cnt === 0 && p !== firstGlobalProp) ||
          (cnt === 1 && p !== secondGlobalProp))
      )
        return p;
      cnt++;
      lastProp = p;
    }

    if (lastProp !== lastGlobalProp) return lastProp;
  }
  function noteGlobalProps() {
    // alternatively Object.keys(global).pop()
    // but this may be faster (pending benchmarks)
    firstGlobalProp = secondGlobalProp = undefined;

    for (var p in global) {
      if (!global.hasOwnProperty(p)) continue;
      if (!firstGlobalProp) firstGlobalProp = p;
      else if (!secondGlobalProp) secondGlobalProp = p;
      lastGlobalProp = p;
    }

    return lastGlobalProp;
  }
  function getInlineCode(match) {
    var start = match.indexOf(">") + 1;
    var end = match.lastIndexOf("<");
    return match.substring(start, end);
  }

  var ALL_SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
  var SCRIPT_TAG_REGEX = /<(script)\s+((?!type=('|')text\/ng-template\3).)*?>.*?<\/\1>/i;
  var SCRIPT_SRC_REGEX = /.*\ssrc=('|")(\S+)\1.*/;
  var SCRIPT_ENTRY_REGEX = /.*\sentry\s*.*/;
  var LINK_TAG_REGEX = /<(link)\s+.*?>/gi;
  var LINK_IGNORE_REGEX = /.*ignore\s*.*/;
  var STYLE_TAG_REGEX = /<style[^>]*>[\s\S]*?<\/style>/gi;
  var STYLE_TYPE_REGEX = /\s+rel=("?|'?)stylesheet\1.*/;
  var STYLE_HREF_REGEX = /.*\shref=('?|"?)(\S+)\1.*/;
  var STYLE_IGNORE_REGEX = /<style(\s+|\s+.+\s+)ignore(\s*|\s+.*)>/i;
  var HTML_COMMENT_REGEX = /<!--([\s\S]*?)-->/g;
  var SCRIPT_IGNORE_REGEX = /<script(\s+|\s+.+\s+)ignore(\s*|\s+.*)>/i;

  function hasProtocol(url) {
    return (
      url.startsWith("//") ||
      url.startsWith("http://") ||
      url.startsWith("https://")
    );
  }

  function getBaseDomain(url) {
    return url.endsWith("/") ? url.substr(0, url.length - 1) : url;
  }

  var genLinkReplaceSymbol = function genLinkReplaceSymbol(linkHref) {
    return "<!-- link ".concat(linkHref, " replaced by import-html-entry -->");
  };
  var genScriptReplaceSymbol = function genScriptReplaceSymbol(scriptSrc) {
    return "<!-- script ".concat(
      scriptSrc,
      " replaced by import-html-entry -->"
    );
  };
  var inlineScriptReplaceSymbol =
    "<!-- inline scripts replaced by import-html-entry -->";
  var genIgnoreAssetReplaceSymbol = function genIgnoreAssetReplaceSymbol(url) {
    return "<!-- ignore asset ".concat(
      url || "file",
      " replaced by import-html-entry -->"
    );
  };
  /**
   * parse the script link from the template
   * 1. collect stylesheets
   * 2. use global eval to evaluate the inline scripts
   *    see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function#Difference_between_Function_constructor_and_function_declaration
   *    see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Do_not_ever_use_eval!
   * @param tpl
   * @param domain
   * @stripStyles whether to strip the css links
   * @returns {{template: void | string | *, scripts: *[], entry: *}}
   */

  function processTpl(tpl, domain) {
    var scripts = [];
    var styles = [];
    var entry = null;
    console.log(
      "0000000000000000000000000000000000000000000000000000000000000000000"
    );
    var template = tpl
      /*
    remove html comment first
    */
      .replace(HTML_COMMENT_REGEX, "")
      .replace(LINK_TAG_REGEX, function(match) {
        /*
      change the css link
      */
        var styleType = !!match.match(STYLE_TYPE_REGEX);

        if (styleType) {
          var styleHref = match.match(STYLE_HREF_REGEX);
          var styleIgnore = match.match(LINK_IGNORE_REGEX);

          if (styleHref) {
            var container = document.createElement("div");
            container.innerHTML = styleHref.input;
            var href = styleHref && container.childNodes[0].href;
            var newHref = href;

            if (href && !hasProtocol(href)) {
              // 处理一下使用相对路径的场景
              newHref =
                getBaseDomain(domain) +
                (href.startsWith("/") ? href : "/".concat(href));
            }

            if (styleIgnore) {
              return genIgnoreAssetReplaceSymbol(newHref);
            }

            styles.push(newHref);
            return genLinkReplaceSymbol(newHref);
          }
        }

        return match;
      })
      .replace(STYLE_TAG_REGEX, function(match) {
        if (STYLE_IGNORE_REGEX.test(match)) {
          return genIgnoreAssetReplaceSymbol("style file");
        }

        return match;
      })
      .replace(ALL_SCRIPT_REGEX, function(match) {
        var scriptIgnore = match.match(SCRIPT_IGNORE_REGEX); // in order to keep the exec order of all javascripts
        // if it is a external script

        if (SCRIPT_TAG_REGEX.test(match)) {
          /*
        collect scripts and replace the ref
        */
          var matchedScriptEntry = match.match(SCRIPT_ENTRY_REGEX);
          var matchedScriptSrcMatch = match.match(SCRIPT_SRC_REGEX);
          var container = document.createElement("div");
          container.innerHTML = match;
          var matchedScriptSrc = container.childNodes[0].src; // var matchedScriptSrc = matchedScriptSrcMatch && matchedScriptSrcMatch[2];

          if (entry && matchedScriptEntry) {
            throw new SyntaxError("You should not set multiply entry script!");
          } else {
            // append the domain while the script not have an protocol prefix
            if (matchedScriptSrc && !hasProtocol(matchedScriptSrc)) {
              matchedScriptSrc =
                getBaseDomain(domain) +
                (matchedScriptSrc.startsWith("/")
                  ? matchedScriptSrc
                  : "/".concat(matchedScriptSrc));
            }

            entry = entry || (matchedScriptEntry && matchedScriptSrc);
          }

          if (scriptIgnore) {
            return genIgnoreAssetReplaceSymbol(matchedScriptSrc || "js file");
          }

          if (matchedScriptSrc) {
            scripts.push(matchedScriptSrc);
            return genScriptReplaceSymbol(matchedScriptSrc);
          }

          return match;
        } else {
          if (scriptIgnore) {
            return genIgnoreAssetReplaceSymbol("js file");
          } // if it is an inline script

          var code = getInlineCode(match); // remove script blocks when all of these lines are comments.

          var isPureCommentBlock = code.split(/[\r\n]+/).every(function(line) {
            return !line.trim() || line.trim().startsWith("//");
          });

          if (!isPureCommentBlock) {
            scripts.push(match);
          }

          return inlineScriptReplaceSymbol;
        }
      });
    scripts = scripts.filter(function(script) {
      // filter empty script
      return !!script;
    });
    var result = {
      template: template,
      scripts: scripts,
      styles: styles,
      // set the last script as entry if have not set
      entry: entry || scripts[scripts.length - 1]
    };
    return result;
  }

  var styleCache = {};
  var scriptCache = {};
  var embedHTMLCache = {};
  var fetch = window.fetch.bind(window);

  function getDomain(url) {
    try {
      // URL 构造函数不支持使用 // 前缀的 url
      var href = new URL(
        url.startsWith("//") ? "".concat(location.protocol).concat(url) : url
      );
      return href.origin;
    } catch (e) {
      return "";
    }
  }
  /**
   * convert external css link to inline style for performance optimization
   * @param template
   * @param styles
   * @return embedHTML
   */

  function getEmbedHTML(template, styles) {
    var embedHTML = template;
    return _getExternalStyleSheets(styles).then(function(styleSheets) {
      embedHTML = styles.reduce(function(html, styleSrc, i) {
        html = html.replace(
          genLinkReplaceSymbol(styleSrc),
          "<style>/* "
            .concat(styleSrc, " */")
            .concat(styleSheets[i], "</style>")
        );
        return html;
      }, embedHTML);
      return embedHTML;
    });
  } // for prefetch

  function _getExternalStyleSheets(styles) {
    return Promise.all(
      styles.map(function(styleLink) {
        if (styleLink.startsWith("<")) {
          // if it is inline style
          return getInlineCode(styleLink);
        } else {
          // external styles
          return (
            styleCache[styleLink] ||
            (styleCache[styleLink] = fetch(styleLink).then(function(response) {
              return response.text();
            }))
          );
        }
      })
    );
  } // for prefetch

  function _getExternalScripts(scripts) {
    return Promise.all(
      scripts.map(function(script) {
        if (script.startsWith("<")) {
          // if it is inline script
          return getInlineCode(script);
        } else {
          // external script
          return (
            scriptCache[script] ||
            (scriptCache[script] = fetch(script).then(function(response) {
              return response.text();
            }))
          );
        }
      })
    );
  }

  function _execScripts(entry, scripts) {
    var proxy =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : window;
    return _getExternalScripts(scripts).then(function(scriptsText) {
      function exec(scriptSrc, inlineScript, resolve) {
        var markName = "Evaluating script ".concat(scriptSrc);
        var measureName = "Evaluating Time Consuming: ".concat(scriptSrc);

        if (process.env.NODE_ENV === "development") {
          performance.mark(markName);
        }

        var fn = new Function("window", inlineScript).bind(proxy);

        if (scriptSrc === entry) {
          noteGlobalProps();

          try {
            // bind window.proxy to change `this` reference in script
            fn(proxy);
          } catch (e) {
            console.error(
              "error occurs while executing the entry ".concat(scriptSrc)
            );
            throw e;
          }

          var exports = proxy[getGlobalProp()] || {};
          resolve(exports);
        } else {
          try {
            // bind window.proxy to change `this` reference in script
            fn(proxy);
          } catch (e) {
            console.error("error occurs while executing ".concat(scriptSrc));
            throw e;
          }
        }

        if (process.env.NODE_ENV === "development") {
          performance.measure(measureName, markName);
          performance.clearMarks(markName);
          performance.clearMeasures(measureName);
        }
      }

      function schedule(i, resolvePromise) {
        if (i < scripts.length) {
          var scriptSrc = scripts[i];
          var inlineScript = scriptsText[i];
          exec(scriptSrc, inlineScript, resolvePromise);
          schedule(i + 1, resolvePromise);
        }
      }

      return new Promise(function(resolve) {
        return schedule(0, resolve);
      });
    });
  }

  function importHTML(url) {
    return (
      embedHTMLCache[url] ||
      (embedHTMLCache[url] = fetch(url)
        .then(function(response) {
          return response.text();
        })
        .then(function(html) {
          var _processTpl = processTpl(html, getDomain(url)),
            template = _processTpl.template,
            scripts = _processTpl.scripts,
            entry = _processTpl.entry,
            styles = _processTpl.styles;

          return getEmbedHTML(template, styles).then(function(embedHTML) {
            return {
              template: embedHTML,
              getExternalScripts: function getExternalScripts() {
                return _getExternalScripts(scripts);
              },
              getExternalStyleSheets: function getExternalStyleSheets() {
                return _getExternalStyleSheets(styles);
              },
              execScripts: function execScripts(proxy) {
                return _execScripts(entry, scripts, proxy);
              }
            };
          });
        }))
    );
  }
  function importEntry(entry) {
    if (!entry) {
      throw new SyntaxError("entry should not be empty!");
    } // html entry

    if (typeof entry === "string") {
      return importHTML(entry);
    } // config entry

    if (Array.isArray(entry.scripts) || Array.isArray(entry.styles)) {
      var _entry$scripts = entry.scripts,
        scripts = _entry$scripts === void 0 ? [] : _entry$scripts,
        _entry$styles = entry.styles,
        styles = _entry$styles === void 0 ? [] : _entry$styles,
        _entry$html = entry.html,
        html = _entry$html === void 0 ? "" : _entry$html;
      return getEmbedHTML(html, styles).then(function(embedHTML) {
        return {
          template: embedHTML,
          getExternalScripts: function getExternalScripts() {
            return _getExternalScripts(scripts);
          },
          getExternalStyleSheets: function getExternalStyleSheets() {
            return _getExternalStyleSheets(styles);
          },
          execScripts: function execScripts(proxy) {
            return _execScripts(scripts[scripts.length - 1], scripts, proxy);
          }
        };
      });
    } else {
      throw new SyntaxError("entry scripts or styles should be array!");
    }
  }

  function createCommonjsModule(fn, module) {
    return (
      (module = { exports: {} }), fn(module, module.exports), module.exports
    );
  }

  var eventemitter2 = createCommonjsModule(function(module, exports) {
    !(function(undefined$1) {
      var isArray = Array.isArray
        ? Array.isArray
        : function _isArray(obj) {
            return Object.prototype.toString.call(obj) === "[object Array]";
          };
      var defaultMaxListeners = 10;

      function init() {
        this._events = {};
        if (this._conf) {
          configure.call(this, this._conf);
        }
      }

      function configure(conf) {
        if (conf) {
          this._conf = conf;

          conf.delimiter && (this.delimiter = conf.delimiter);
          this._maxListeners =
            conf.maxListeners !== undefined$1
              ? conf.maxListeners
              : defaultMaxListeners;

          conf.wildcard && (this.wildcard = conf.wildcard);
          conf.newListener && (this._newListener = conf.newListener);
          conf.removeListener && (this._removeListener = conf.removeListener);
          conf.verboseMemoryLeak &&
            (this.verboseMemoryLeak = conf.verboseMemoryLeak);

          if (this.wildcard) {
            this.listenerTree = {};
          }
        } else {
          this._maxListeners = defaultMaxListeners;
        }
      }

      function logPossibleMemoryLeak(count, eventName) {
        var errorMsg =
          "(node) warning: possible EventEmitter memory " +
          "leak detected. " +
          count +
          " listeners added. " +
          "Use emitter.setMaxListeners() to increase limit.";

        if (this.verboseMemoryLeak) {
          errorMsg += " Event name: " + eventName + ".";
        }

        if (typeof process !== "undefined" && process.emitWarning) {
          var e = new Error(errorMsg);
          e.name = "MaxListenersExceededWarning";
          e.emitter = this;
          e.count = count;
          process.emitWarning(e);
        } else {
          console.error(errorMsg);

          if (console.trace) {
            console.trace();
          }
        }
      }

      function EventEmitter(conf) {
        this._events = {};
        this._newListener = false;
        this._removeListener = false;
        this.verboseMemoryLeak = false;
        configure.call(this, conf);
      }
      EventEmitter.EventEmitter2 = EventEmitter; // backwards compatibility for exporting EventEmitter property

      //
      // Attention, function return type now is array, always !
      // It has zero elements if no any matches found and one or more
      // elements (leafs) if there are matches
      //
      function searchListenerTree(handlers, type, tree, i) {
        if (!tree) {
          return [];
        }
        var listeners = [],
          leaf,
          len,
          branch,
          xTree,
          xxTree,
          isolatedBranch,
          endReached,
          typeLength = type.length,
          currentType = type[i],
          nextType = type[i + 1];
        if (i === typeLength && tree._listeners) {
          //
          // If at the end of the event(s) list and the tree has listeners
          // invoke those listeners.
          //
          if (typeof tree._listeners === "function") {
            handlers && handlers.push(tree._listeners);
            return [tree];
          } else {
            for (leaf = 0, len = tree._listeners.length; leaf < len; leaf++) {
              handlers && handlers.push(tree._listeners[leaf]);
            }
            return [tree];
          }
        }

        if (currentType === "*" || currentType === "**" || tree[currentType]) {
          //
          // If the event emitted is '*' at this part
          // or there is a concrete match at this patch
          //
          if (currentType === "*") {
            for (branch in tree) {
              if (branch !== "_listeners" && tree.hasOwnProperty(branch)) {
                listeners = listeners.concat(
                  searchListenerTree(handlers, type, tree[branch], i + 1)
                );
              }
            }
            return listeners;
          } else if (currentType === "**") {
            endReached =
              i + 1 === typeLength ||
              (i + 2 === typeLength && nextType === "*");
            if (endReached && tree._listeners) {
              // The next element has a _listeners, add it to the handlers.
              listeners = listeners.concat(
                searchListenerTree(handlers, type, tree, typeLength)
              );
            }

            for (branch in tree) {
              if (branch !== "_listeners" && tree.hasOwnProperty(branch)) {
                if (branch === "*" || branch === "**") {
                  if (tree[branch]._listeners && !endReached) {
                    listeners = listeners.concat(
                      searchListenerTree(
                        handlers,
                        type,
                        tree[branch],
                        typeLength
                      )
                    );
                  }
                  listeners = listeners.concat(
                    searchListenerTree(handlers, type, tree[branch], i)
                  );
                } else if (branch === nextType) {
                  listeners = listeners.concat(
                    searchListenerTree(handlers, type, tree[branch], i + 2)
                  );
                } else {
                  // No match on this one, shift into the tree but not in the type array.
                  listeners = listeners.concat(
                    searchListenerTree(handlers, type, tree[branch], i)
                  );
                }
              }
            }
            return listeners;
          }

          listeners = listeners.concat(
            searchListenerTree(handlers, type, tree[currentType], i + 1)
          );
        }

        xTree = tree["*"];
        if (xTree) {
          //
          // If the listener tree will allow any match for this part,
          // then recursively explore all branches of the tree
          //
          searchListenerTree(handlers, type, xTree, i + 1);
        }

        xxTree = tree["**"];
        if (xxTree) {
          if (i < typeLength) {
            if (xxTree._listeners) {
              // If we have a listener on a '**', it will catch all, so add its handler.
              searchListenerTree(handlers, type, xxTree, typeLength);
            }

            // Build arrays of matching next branches and others.
            for (branch in xxTree) {
              if (branch !== "_listeners" && xxTree.hasOwnProperty(branch)) {
                if (branch === nextType) {
                  // We know the next element will match, so jump twice.
                  searchListenerTree(handlers, type, xxTree[branch], i + 2);
                } else if (branch === currentType) {
                  // Current node matches, move into the tree.
                  searchListenerTree(handlers, type, xxTree[branch], i + 1);
                } else {
                  isolatedBranch = {};
                  isolatedBranch[branch] = xxTree[branch];
                  searchListenerTree(
                    handlers,
                    type,
                    { "**": isolatedBranch },
                    i + 1
                  );
                }
              }
            }
          } else if (xxTree._listeners) {
            // We have reached the end and still on a '**'
            searchListenerTree(handlers, type, xxTree, typeLength);
          } else if (xxTree["*"] && xxTree["*"]._listeners) {
            searchListenerTree(handlers, type, xxTree["*"], typeLength);
          }
        }

        return listeners;
      }

      function growListenerTree(type, listener) {
        type =
          typeof type === "string" ? type.split(this.delimiter) : type.slice();

        //
        // Looks for two consecutive '**', if so, don't add the event at all.
        //
        for (var i = 0, len = type.length; i + 1 < len; i++) {
          if (type[i] === "**" && type[i + 1] === "**") {
            return;
          }
        }

        var tree = this.listenerTree;
        var name = type.shift();

        while (name !== undefined$1) {
          if (!tree[name]) {
            tree[name] = {};
          }

          tree = tree[name];

          if (type.length === 0) {
            if (!tree._listeners) {
              tree._listeners = listener;
            } else {
              if (typeof tree._listeners === "function") {
                tree._listeners = [tree._listeners];
              }

              tree._listeners.push(listener);

              if (
                !tree._listeners.warned &&
                this._maxListeners > 0 &&
                tree._listeners.length > this._maxListeners
              ) {
                tree._listeners.warned = true;
                logPossibleMemoryLeak.call(this, tree._listeners.length, name);
              }
            }
            return true;
          }
          name = type.shift();
        }
        return true;
      }

      // By default EventEmitters will print a warning if more than
      // 10 listeners are added to it. This is a useful default which
      // helps finding memory leaks.
      //
      // Obviously not all Emitters should be limited to 10. This function allows
      // that to be increased. Set to zero for unlimited.

      EventEmitter.prototype.delimiter = ".";

      EventEmitter.prototype.setMaxListeners = function(n) {
        if (n !== undefined$1) {
          this._maxListeners = n;
          if (!this._conf) this._conf = {};
          this._conf.maxListeners = n;
        }
      };

      EventEmitter.prototype.event = "";

      EventEmitter.prototype.once = function(event, fn) {
        return this._once(event, fn, false);
      };

      EventEmitter.prototype.prependOnceListener = function(event, fn) {
        return this._once(event, fn, true);
      };

      EventEmitter.prototype._once = function(event, fn, prepend) {
        this._many(event, 1, fn, prepend);
        return this;
      };

      EventEmitter.prototype.many = function(event, ttl, fn) {
        return this._many(event, ttl, fn, false);
      };

      EventEmitter.prototype.prependMany = function(event, ttl, fn) {
        return this._many(event, ttl, fn, true);
      };

      EventEmitter.prototype._many = function(event, ttl, fn, prepend) {
        var self = this;

        if (typeof fn !== "function") {
          throw new Error("many only accepts instances of Function");
        }

        function listener() {
          if (--ttl === 0) {
            self.off(event, listener);
          }
          return fn.apply(this, arguments);
        }

        listener._origin = fn;

        this._on(event, listener, prepend);

        return self;
      };

      EventEmitter.prototype.emit = function() {
        this._events || init.call(this);

        var type = arguments[0];

        if (type === "newListener" && !this._newListener) {
          if (!this._events.newListener) {
            return false;
          }
        }

        var al = arguments.length;
        var args, l, i, j;
        var handler;

        if (this._all && this._all.length) {
          handler = this._all.slice();
          if (al > 3) {
            args = new Array(al);
            for (j = 0; j < al; j++) args[j] = arguments[j];
          }

          for (i = 0, l = handler.length; i < l; i++) {
            this.event = type;
            switch (al) {
              case 1:
                handler[i].call(this, type);
                break;
              case 2:
                handler[i].call(this, type, arguments[1]);
                break;
              case 3:
                handler[i].call(this, type, arguments[1], arguments[2]);
                break;
              default:
                handler[i].apply(this, args);
            }
          }
        }

        if (this.wildcard) {
          handler = [];
          var ns =
            typeof type === "string"
              ? type.split(this.delimiter)
              : type.slice();
          searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
        } else {
          handler = this._events[type];
          if (typeof handler === "function") {
            this.event = type;
            switch (al) {
              case 1:
                handler.call(this);
                break;
              case 2:
                handler.call(this, arguments[1]);
                break;
              case 3:
                handler.call(this, arguments[1], arguments[2]);
                break;
              default:
                args = new Array(al - 1);
                for (j = 1; j < al; j++) args[j - 1] = arguments[j];
                handler.apply(this, args);
            }
            return true;
          } else if (handler) {
            // need to make copy of handlers because list can change in the middle
            // of emit call
            handler = handler.slice();
          }
        }

        if (handler && handler.length) {
          if (al > 3) {
            args = new Array(al - 1);
            for (j = 1; j < al; j++) args[j - 1] = arguments[j];
          }
          for (i = 0, l = handler.length; i < l; i++) {
            this.event = type;
            switch (al) {
              case 1:
                handler[i].call(this);
                break;
              case 2:
                handler[i].call(this, arguments[1]);
                break;
              case 3:
                handler[i].call(this, arguments[1], arguments[2]);
                break;
              default:
                handler[i].apply(this, args);
            }
          }
          return true;
        } else if (!this._all && type === "error") {
          if (arguments[1] instanceof Error) {
            throw arguments[1]; // Unhandled 'error' event
          } else {
            throw new Error("Uncaught, unspecified 'error' event.");
          }
        }

        return !!this._all;
      };

      EventEmitter.prototype.emitAsync = function() {
        this._events || init.call(this);

        var type = arguments[0];

        if (type === "newListener" && !this._newListener) {
          if (!this._events.newListener) {
            return Promise.resolve([false]);
          }
        }

        var promises = [];

        var al = arguments.length;
        var args, l, i, j;
        var handler;

        if (this._all) {
          if (al > 3) {
            args = new Array(al);
            for (j = 1; j < al; j++) args[j] = arguments[j];
          }
          for (i = 0, l = this._all.length; i < l; i++) {
            this.event = type;
            switch (al) {
              case 1:
                promises.push(this._all[i].call(this, type));
                break;
              case 2:
                promises.push(this._all[i].call(this, type, arguments[1]));
                break;
              case 3:
                promises.push(
                  this._all[i].call(this, type, arguments[1], arguments[2])
                );
                break;
              default:
                promises.push(this._all[i].apply(this, args));
            }
          }
        }

        if (this.wildcard) {
          handler = [];
          var ns =
            typeof type === "string"
              ? type.split(this.delimiter)
              : type.slice();
          searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
        } else {
          handler = this._events[type];
        }

        if (typeof handler === "function") {
          this.event = type;
          switch (al) {
            case 1:
              promises.push(handler.call(this));
              break;
            case 2:
              promises.push(handler.call(this, arguments[1]));
              break;
            case 3:
              promises.push(handler.call(this, arguments[1], arguments[2]));
              break;
            default:
              args = new Array(al - 1);
              for (j = 1; j < al; j++) args[j - 1] = arguments[j];
              promises.push(handler.apply(this, args));
          }
        } else if (handler && handler.length) {
          handler = handler.slice();
          if (al > 3) {
            args = new Array(al - 1);
            for (j = 1; j < al; j++) args[j - 1] = arguments[j];
          }
          for (i = 0, l = handler.length; i < l; i++) {
            this.event = type;
            switch (al) {
              case 1:
                promises.push(handler[i].call(this));
                break;
              case 2:
                promises.push(handler[i].call(this, arguments[1]));
                break;
              case 3:
                promises.push(
                  handler[i].call(this, arguments[1], arguments[2])
                );
                break;
              default:
                promises.push(handler[i].apply(this, args));
            }
          }
        } else if (!this._all && type === "error") {
          if (arguments[1] instanceof Error) {
            return Promise.reject(arguments[1]); // Unhandled 'error' event
          } else {
            return Promise.reject("Uncaught, unspecified 'error' event.");
          }
        }

        return Promise.all(promises);
      };

      EventEmitter.prototype.on = function(type, listener) {
        return this._on(type, listener, false);
      };

      EventEmitter.prototype.prependListener = function(type, listener) {
        return this._on(type, listener, true);
      };

      EventEmitter.prototype.onAny = function(fn) {
        return this._onAny(fn, false);
      };

      EventEmitter.prototype.prependAny = function(fn) {
        return this._onAny(fn, true);
      };

      EventEmitter.prototype.addListener = EventEmitter.prototype.on;

      EventEmitter.prototype._onAny = function(fn, prepend) {
        if (typeof fn !== "function") {
          throw new Error("onAny only accepts instances of Function");
        }

        if (!this._all) {
          this._all = [];
        }

        // Add the function to the event listener collection.
        if (prepend) {
          this._all.unshift(fn);
        } else {
          this._all.push(fn);
        }

        return this;
      };

      EventEmitter.prototype._on = function(type, listener, prepend) {
        if (typeof type === "function") {
          this._onAny(type, listener);
          return this;
        }

        if (typeof listener !== "function") {
          throw new Error("on only accepts instances of Function");
        }
        this._events || init.call(this);

        // To avoid recursion in the case that type == "newListeners"! Before
        // adding it to the listeners, first emit "newListeners".
        if (this._newListener) this.emit("newListener", type, listener);

        if (this.wildcard) {
          growListenerTree.call(this, type, listener);
          return this;
        }

        if (!this._events[type]) {
          // Optimize the case of one listener. Don't need the extra array object.
          this._events[type] = listener;
        } else {
          if (typeof this._events[type] === "function") {
            // Change to array.
            this._events[type] = [this._events[type]];
          }

          // If we've already got an array, just add
          if (prepend) {
            this._events[type].unshift(listener);
          } else {
            this._events[type].push(listener);
          }

          // Check for listener leak
          if (
            !this._events[type].warned &&
            this._maxListeners > 0 &&
            this._events[type].length > this._maxListeners
          ) {
            this._events[type].warned = true;
            logPossibleMemoryLeak.call(this, this._events[type].length, type);
          }
        }

        return this;
      };

      EventEmitter.prototype.off = function(type, listener) {
        if (typeof listener !== "function") {
          throw new Error("removeListener only takes instances of Function");
        }

        var handlers,
          leafs = [];

        if (this.wildcard) {
          var ns =
            typeof type === "string"
              ? type.split(this.delimiter)
              : type.slice();
          leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
        } else {
          // does not use listeners(), so no side effect of creating _events[type]
          if (!this._events[type]) return this;
          handlers = this._events[type];
          leafs.push({ _listeners: handlers });
        }

        for (var iLeaf = 0; iLeaf < leafs.length; iLeaf++) {
          var leaf = leafs[iLeaf];
          handlers = leaf._listeners;
          if (isArray(handlers)) {
            var position = -1;

            for (var i = 0, length = handlers.length; i < length; i++) {
              if (
                handlers[i] === listener ||
                (handlers[i].listener && handlers[i].listener === listener) ||
                (handlers[i]._origin && handlers[i]._origin === listener)
              ) {
                position = i;
                break;
              }
            }

            if (position < 0) {
              continue;
            }

            if (this.wildcard) {
              leaf._listeners.splice(position, 1);
            } else {
              this._events[type].splice(position, 1);
            }

            if (handlers.length === 0) {
              if (this.wildcard) {
                delete leaf._listeners;
              } else {
                delete this._events[type];
              }
            }
            if (this._removeListener)
              this.emit("removeListener", type, listener);

            return this;
          } else if (
            handlers === listener ||
            (handlers.listener && handlers.listener === listener) ||
            (handlers._origin && handlers._origin === listener)
          ) {
            if (this.wildcard) {
              delete leaf._listeners;
            } else {
              delete this._events[type];
            }
            if (this._removeListener)
              this.emit("removeListener", type, listener);
          }
        }

        function recursivelyGarbageCollect(root) {
          if (root === undefined$1) {
            return;
          }
          var keys = Object.keys(root);
          for (var i in keys) {
            var key = keys[i];
            var obj = root[key];
            if (
              obj instanceof Function ||
              typeof obj !== "object" ||
              obj === null
            )
              continue;
            if (Object.keys(obj).length > 0) {
              recursivelyGarbageCollect(root[key]);
            }
            if (Object.keys(obj).length === 0) {
              delete root[key];
            }
          }
        }
        recursivelyGarbageCollect(this.listenerTree);

        return this;
      };

      EventEmitter.prototype.offAny = function(fn) {
        var i = 0,
          l = 0,
          fns;
        if (fn && this._all && this._all.length > 0) {
          fns = this._all;
          for (i = 0, l = fns.length; i < l; i++) {
            if (fn === fns[i]) {
              fns.splice(i, 1);
              if (this._removeListener) this.emit("removeListenerAny", fn);
              return this;
            }
          }
        } else {
          fns = this._all;
          if (this._removeListener) {
            for (i = 0, l = fns.length; i < l; i++)
              this.emit("removeListenerAny", fns[i]);
          }
          this._all = [];
        }
        return this;
      };

      EventEmitter.prototype.removeListener = EventEmitter.prototype.off;

      EventEmitter.prototype.removeAllListeners = function(type) {
        if (type === undefined$1) {
          !this._events || init.call(this);
          return this;
        }

        if (this.wildcard) {
          var ns =
            typeof type === "string"
              ? type.split(this.delimiter)
              : type.slice();
          var leafs = searchListenerTree.call(
            this,
            null,
            ns,
            this.listenerTree,
            0
          );

          for (var iLeaf = 0; iLeaf < leafs.length; iLeaf++) {
            var leaf = leafs[iLeaf];
            leaf._listeners = null;
          }
        } else if (this._events) {
          this._events[type] = null;
        }
        return this;
      };

      EventEmitter.prototype.listeners = function(type) {
        if (this.wildcard) {
          var handlers = [];
          var ns =
            typeof type === "string"
              ? type.split(this.delimiter)
              : type.slice();
          searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
          return handlers;
        }

        this._events || init.call(this);

        if (!this._events[type]) this._events[type] = [];
        if (!isArray(this._events[type])) {
          this._events[type] = [this._events[type]];
        }
        return this._events[type];
      };

      EventEmitter.prototype.eventNames = function() {
        return Object.keys(this._events);
      };

      EventEmitter.prototype.listenerCount = function(type) {
        return this.listeners(type).length;
      };

      EventEmitter.prototype.listenersAny = function() {
        if (this._all) {
          return this._all;
        } else {
          return [];
        }
      };

      if (typeof undefined$1 === "function" && undefined$1.amd) {
        // AMD. Register as an anonymous module.
        undefined$1(function() {
          return EventEmitter;
        });
      } else {
        // CommonJS
        module.exports = EventEmitter;
      }
    })();
  });

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
    (window.__EASY_MFT_GLOBAL_EVENT = new eventemitter2({
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
                          getExternalStyleSheets =
                            result.getExternalStyleSheets;
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
                          getExternalStyleSheets =
                            _result.getExternalStyleSheets;
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
    })(eventemitter2);

  exports.default = CtrlApps;
  exports.globalEvent = globalEvent;

  Object.defineProperty(exports, "__esModule", { value: true });
});
