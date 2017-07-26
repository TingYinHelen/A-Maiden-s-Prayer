// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Element from 'element-ui'
import store from './store'
import 'element-ui/lib/theme-default/index.css'

import 'static/font.css'
import 'static/style.less'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(Element)


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
