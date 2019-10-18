import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import XHeader from './components/XHeader'

import './assets/global.scss'

Vue.config.productionTip = false
Vue.component('x-header', XHeader)

new Vue({
  router: Router(),
  render: h => h(App),
}).$mount('#app')
