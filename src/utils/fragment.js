/**
 * 一个应用既一个Fragment， 包含了应用所有的生命周期
 * @class Fragment
 */
class Fragment {
  constructor(app, parent) {
    const {
      name,
      entry,
      contain,
      template,
      styles,
      module,
      baseUrl,
      free,
      sandbox
    } = app;
    this.parent = parent;
    this.app = app;
    this.mounted = false;
    this.sandbox = sandbox;
    this.name = name;
    this.entry = entry;
    this.style = [];
    this.contain = contain;
    this.template = template;
    this.baseUrl = baseUrl;
    this.__module = module;
    this.__free = free;
    this.parent = parent || "";
    styles &&
      styles.map(ele => {
        this.addStyle(ele);
      });
  }

  bootstrap() {
    this.__module.default.bootstrap(this);
  }
  unmount() {
    if (this.mounted) {
      this.__module.default.unmount(this.contain);
      this.mounted = false;
    }
  }
  mount(props) {
    if (!this.mounted) {
      if (!this.contain) {
        console.error(`Application name ${this.name} contain is null`);
      }
      this.__module.default.mount(this.contain, this.baseUrl, this.app, this);
      this.mounted = true;
    }
  }
  destroy() {
    // unmount的时候不能释放资源，因为还有可能mount
    // 所以增加 destroy 方法，彻底释放不会再次mount的应用
    this.unmount();
    this.__free();
    this.style.map(e => {
      e.parentNode && e.parentNode.removeChild(e);
    });
  }
  addStyle(txt) {
    let link = document.createElement("style");
    link.innerHTML = txt;
    let result = this.style.find(e => {
      return e.innerHTML === txt;
    });
    if (!result) {
      let heads = document.getElementsByTagName("head");
      if (heads.length) {
        heads[0].appendChild(link);
      } else {
        document.documentElement.appendChild(link);
      }
      this.style.push(link);
    }
  }
}

export default Fragment;
