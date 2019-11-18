/* eslint-disable */
/**
 * 一个应用既一个Fragment， 包含了应用所有的生命周期
 * @class Fragment
 */
class Fragment {
  constructor(app, parent) {
    const { name } = app;
    this.name = name;
    this.app = app;
    this.parent = parent;
    this.mounted = false;
    this.style = [];
    if (app.styles) {
      app.styles.map(ele => {
        this._addStyle(ele);
      });
    }
  }

  bootstrap() {
    this.app.module.default.bootstrap(this);
  }

  unmount() {
    if (this.mounted) {
      this.app.module.default.unmount(this.app.contain);
      this.mounted = false;
    }
  }

  mount() {
    if (!this.mounted) {
      this.app.module.default.mount(
        this.app.contain,
        this.app.baseUrl,
        this.app,
        this
      );
      this.mounted = true;
    }
  }

  destroy() {
    // unmount的时候不能释放资源，因为还有可能mount
    // 所以增加 destroy 方法，彻底释放不会再次mount的应用
    this.unmount();
    this.app.free();
    this.style.map(e => {
      e.parentNode && e.parentNode.removeChild(e);
    });
  }

  _addStyle(txt) {
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
