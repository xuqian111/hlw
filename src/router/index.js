import Vue from 'vue'
import Router from 'vue-router'
import cbMain from '../components/cbMain'
import cbRole from '../pages/cbRole'

Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/',
    name: 'cbMain',
    component: cbMain
  },
  {
    path: '/role',
    name: 'cbRole',
    component: cbRole
  }
]
})
