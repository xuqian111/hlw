import Vue from 'vue'
import Router from 'vue-router'
import cbMain from '../components/cbMain'
import userManagement from '../pages/userManagement'
import userManagementWrite from '../components/cbManagement/userManagementWrite'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cbMain',
      component: cbMain,
    },
    {
      path: '/userManagement',
      name: 'userManagement',
      component: userManagement
    },
    {
      path: '/userManagementWrite',
      name: 'userManagementWrite',
      component: userManagementWrite
    }
  ]
})
