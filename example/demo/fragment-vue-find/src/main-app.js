import Vue from "vue";
import App from "./App.vue";
import Router from "./router";
import Config from "../config/application.json";
import { appPool } from "./global";
import { globalEvent } from "easy-mfs";

globalEvent.on("global-test-event", function(e) {
  alert("global-test-event:" + e);
});

Vue.config.productionTip = false;
let instance = null;

export default {
  bootstrap: async function bootstrap(parent) {
    console.log("react app bootstraped");
    appPool.parent = parent;
  },
  mount: async function mount(contain, baseUrl, appinfo) {
    console.log("props from main framework", contain, baseUrl);
    appPool.baseUrl = baseUrl;
    const div = document.createElement("div");
    contain.appendChild(div);
    instance = new Vue({
      router: Router(baseUrl),
      render: h => h(App)
    }).$mount(div);
  },
  unmount: async function unmount() {
    appPool.sonApplication.map(ele => {
      ele.unmount();
    });
    instance.$destroy();
    instance.$el.parentNode.removeChild(instance.$el);
    instance = null;
  }
};
