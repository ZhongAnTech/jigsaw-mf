import { importEntry } from "html-entry";
import EventEmitter from "eventemitter2";
import Fragment from "./utils/fragment";
import getSandbox from "./utils/sandbox";

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
export default class CtrlApps extends EventEmitter {
  constructor(appinfo) {
    super();
    this.sonApplication = [];
    this.info = appinfo;
    this.__baseUrl = appinfo.baseUrl || ""; // 主应用的基本url
    this.name = appinfo.name || "";
    this.routerMode = appinfo.routerMode || "history";
    this.classNamespace = appinfo.classNamespace || "";
    this.parent = "";
    this.listenEvents();
  }
  get fullUrl() {
    return (this.parent.fullUrl || "") + this.__baseUrl;
  }
  get baseUrl() {
    return this.__baseUrl;
  }
  set baseUrl(val) {
    this.__baseUrl = val;
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
  _getAppBaseUrl(app) {
    return this.baseUrl + (app.baseUrl || "");
  }
  registerApps(applist) {
    if (applist instanceof Array) {
      applist.forEach(this.registerApp.bind(this));
    } else if (typeof applist === "object") {
      this.registerApp(applist);
    } else {
      console.error(
        "registerApps: object or array is wanted but get " + typeof applist
      );
    }
  }
  async registerApp(app) {
    // in order to not modify the origin data by incident;
    app = { ...app };
    // handle duplicate registration
    const oldApp = this.findApp(app.name);
    if (oldApp) {
      oldApp.mounted = false;
      oldApp.contain = app.contain;
      oldApp.baseUrl = this._getAppBaseUrl(app);
      if (oldApp.app.canActive(oldApp.baseUrl)) {
        oldApp.mount();
      }
      return;
    }

    if (typeof app.canActive !== "function") {
      if (app.routerMode === "hash") {
        app.canActive = path =>
          window.location.hash.replace(/^#/, "").startsWith(path);
      } else {
        app.canActive = path => window.location.pathname.startsWith(path);
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
        let baseurl = this._getAppBaseUrl(app);
        app.baseUrl = baseurl.replace(/\/+/, "/");
        const sonApplication = new Fragment(app, this);
        sonApplication.bootstrap();
        // delete window[app.name]
        // window[app.name] = null
        if (app.canActive(app.baseUrl)) {
          sonApplication.mount();
        }
        this.sonApplication.push(sonApplication);
      } else {
        console.error(`child application ${app.applicationName} not found`);
      }
    });
  }
  unregisterAllApps() {
    this.sonApplication.forEach(item => {
      item.destroy();
    });
    this.sonApplication = [];
  }
  handleLocationChange() {
    this.sonApplication.forEach(item => {
      if (item.app.canActive(item.app.baseUrl)) {
        item.mount();
      } else {
        item.unmount();
      }
    });
  }
  listenEvents() {
    window.addEventListener("popstate", this.handleLocationChange.bind(this));
    window.addEventListener("hashchange", this.handleLocationChange.bind(this));
  }
}
