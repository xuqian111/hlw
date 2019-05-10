// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from "./store/store"
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, {
  size: 'small',
  zIndex: 3000
});


Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  let user = localStorage.getItem("user")
  next()
  if (user) {
    next()
  } else {
    router.push("/login")
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
