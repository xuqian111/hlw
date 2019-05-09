import Vue from 'vue'
import Router from 'vue-router'
import cbMain from '../components/cbMain'
import recruit from'../components/recruit/cbRecruit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cbMain',
      component: cbMain
    },
    {
      path: '/recruit',
      name: 'recruit',
      component: recruit
    }
  ]
})
