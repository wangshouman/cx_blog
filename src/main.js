// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import layout from './components/Layout'
<<<<<<< HEAD
import axios from 'axios'
import '../config/axios'

Vue.prototype.$ajax = axios
=======
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
>>>>>>> b3f51ca0af54c834ccef2d9b05e3c3c1abc9cbe1
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { layout },
  template: '<layout/>'
})
