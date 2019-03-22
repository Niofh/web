import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "./assets/css/reset.styl"
import "./assets/css/common.styl"
import './plugins/element.js'

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
