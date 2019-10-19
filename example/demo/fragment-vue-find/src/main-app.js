import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import Config from '../config/application.json'
import CtrlApps, {globalEvent} from './global'

globalEvent.on('global-test-event', function(e){
  alert( 'global-test-event:' + e)
})

  Vue.config.productionTip = false
  let instance = null;

  export default {
    bootstrap: async function bootstrap(parent) {
      console.log('react app bootstraped');
      CtrlApps.parent = parent
    },
    mount: async function mount(contain, baseUrl, appinfo) {
      console.log('props from main framework', contain, baseUrl);
      CtrlApps.baseUrl = baseUrl;
      const div = document.createElement('div');
      contain.appendChild(div);
      instance = new Vue({
        router: Router(baseUrl),
        render: h => h(App),
      }).$mount(div);
    },
    unmount: async function unmount() {
      CtrlApps.sonApplication.map((ele) => {
        ele.unmount()
      })
      instance.$destroy();
      instance.$el.parentNode.removeChild(instance.$el);
      instance = null;
    }
  }

