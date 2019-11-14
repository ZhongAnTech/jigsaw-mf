/* eslint-disable */
import { importEntry } from "html-entry";
import EventEmitter from "eventemitter2";
import Logger from "./utils/logger";
import Fragment from "./utils/fragment";
import getSandbox from "./utils/sandbox";
import { joinPath } from "./utils/tool";

// 全局事件，供各应用之间通信使用
export let globalEvent =
  window.__EASY_MFS_GLOBAL_EVENT ||
  (window.__EASY_MFS_GLOBAL_EVENT = new EventEmitter({
    wildcard: true,
    delimiter: ".",
    newListener: false,
    maxListeners: Number.MAX_VALUE,
    verboseMemoryLeak: false
  }));

// 注册并管理各应用
export default class EasyMfs extends EventEmitter {
  constructor(appinfo) {
    super();
    this._baseUrl = appinfo.baseUrl || ""; // 主应用的基本url
    this._listenEvents();
    this.sonApplication = [];
    this.config = appinfo;
    this.name = appinfo.name || "";
    this.routerMode = appinfo.routerMode || "history";
    this.parent = "";
  }
  get fullUrl() {
    return (this.parent.fullUrl || "") + this._baseUrl;
  }
  get baseUrl() {
    return this._baseUrl;
  }
  set baseUrl(val) {
    this._baseUrl = val;
  }
  findApp(name) {
    return this.sonApplication.find(function(app) {
      return name === app.name;
    });
  }
  unregisterApps(name) {
    let index = this.sonApplication.findIndex(function(app) {
      return name === app.name;
    });
    if (index !== -1) {
      this.sonApplication[index].destroy();
      this.sonApplication.splice(index, 1);
    }
  }
  registerApps(applist) {
    if (applist instanceof Array) {
      applist.forEach(this.registerApp.bind(this));
    } else if (typeof applist === "object") {
      this.registerApp(applist);
    } else {
      Logger.error(
        "registerApps: object or array is wanted but get " + typeof applist
      );
    }
  }
  async registerApp(app) {
    // in order to not modify the origin data by incident;
    app = { ...app, pathnameBase: this.baseUrl };
    app.routerMode = app.routerMode || "history";

    if (!this._checkRouterMode(app) || !this._validateParams(app)) {
      return;
    }

    // handle duplicate registration
    const oldApp = this.findApp(app.name);
    if (oldApp) {
      oldApp.mounted = false;
      oldApp.contain = app.contain;
      oldApp.baseUrl = this._getAppBaseUrl(app);
      if (oldApp.app.canActive(oldApp.baseUrl, oldApp.pathnameBase)) {
        oldApp.mount();
      }
      return;
    }

    if (app.routerMode === "hash") {
      const parts = app.baseUrl.split("#");
      // e.g. /pathname/#/hash/part
      if (parts.length > 1) {
        app.pathnameBase = joinPath(this.baseUrl, parts[0]);
        app.baseUrl = parts[1];
      }
    }

    if (typeof app.canActive !== "function") {
      if (app.routerMode === "hash") {
        app.canActive = (baseUrl, pathnameBase) => {
          return (
            window.location.pathname.startsWith(pathnameBase) &&
            window.location.hash.replace(/^#/, "").startsWith(baseUrl)
          );
        };
      } else {
        app.canActive = baseUrl => window.location.pathname.startsWith(baseUrl);
      }
    }

    let dll = (window.__easy_mfs_dlls = window.__easy_mfs_dlls || {});
    let template, execScripts, getExternalScripts, getExternalStyleSheets;
    if (dll[app.entry]) {
      const result = dll[app.entry];
      template = result.template;
      execScripts = result.execScripts;
      getExternalScripts = result.getExternalScripts;
      getExternalStyleSheets = result.getExternalStyleSheets;
    } else {
      const result = await importEntry(app.entry);
      template = result.template;
      execScripts = result.execScripts;
      getExternalScripts = result.getExternalScripts;
      getExternalStyleSheets = result.getExternalStyleSheets;
      dll[app.entry] = result;
    }

    const sandbox = getSandbox();
    Promise.all([
      execScripts(sandbox),
      getExternalScripts(sandbox),
      getExternalStyleSheets()
    ]).then(values => {
      const script = values[0];
      const extScript = values[1];
      const styles = values[2];
      app.template = template;
      app.styles = styles;
      const _module = sandbox[app.applicationName];
      if (_module && _module.__esModule) {
        app.module = sandbox[app.applicationName];
        app.sandbox = sandbox;
        app.free = sandbox.__easy_mfs_free;
        app.baseUrl = this._getAppBaseUrl(app);
        const sonApplication = new Fragment(app, this);
        sonApplication.bootstrap();
        // delete window[app.name]
        // window[app.name] = null
        if (app.canActive(app.baseUrl, this.baseUrl)) {
          sonApplication.mount();
        }
        this.sonApplication.push(sonApplication);
      } else {
        Logger.error(`child application ${app.applicationName} not found`);
      }
    });
  }
  unregisterAllApps() {
    this.sonApplication.forEach(item => {
      item.destroy();
    });
    this.sonApplication = [];
  }
  _validateParams(app) {
    const emptyFields = [];
    ["name", "applicationName", "entry", "contain", "baseUrl"].forEach(
      field => {
        if (!app[field]) {
          emptyFields.push(field);
        }
      }
    );
    if (emptyFields.length) {
      Logger.error(
        `'${emptyFields.join(",")}' is required for '${app.name ||
          app.applicationName ||
          app.entry}'.`
      );
    }
    return emptyFields.length == 0;
  }
  _checkRouterMode(app) {
    if (this.routerMode === "hash") {
      if (app.routerMode === "history") {
        Logger.error(
          `${app.name} can NOT be 'history' mode when the master application is in 'hash' mode. ignored！`
        );
        return false;
      }
    }
    return true;
  }
  _getAppBaseUrl(app) {
    const baseUrl = app.baseUrl || "";
    if (this.routerMode === "history" && app.routerMode === "hash") {
      return baseUrl;
    }
    return joinPath(this.baseUrl, baseUrl);
  }
  _handleLocationChange() {
    this.sonApplication.forEach(item => {
      if (item.app.canActive(item.app.baseUrl)) {
        item.mount();
      } else {
        item.unmount();
      }
    });
  }
  _listenEvents() {
    window.addEventListener("popstate", this._handleLocationChange.bind(this));
    window.addEventListener(
      "hashchange",
      this._handleLocationChange.bind(this)
    );
  }
}
