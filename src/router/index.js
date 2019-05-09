import Vue from 'vue'
import Router from 'vue-router'
import cbMain from '../components/cbMain'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'cbMain',
    component: cbMain
  }]
})
