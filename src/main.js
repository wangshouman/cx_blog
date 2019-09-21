// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import layout from './components/Layout'

import axios from 'axios'
import '../config/axios'

Vue.prototype.$ajax = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { layout },
  template: '<layout/>'
})
