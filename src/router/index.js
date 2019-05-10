import Vue from 'vue'
import Router from 'vue-router'
import Index from "../pages/index";
import recruit from '../components/recruit/cbRecruit'
import cbRole from '../pages/cbRole'
import login from '../pages/login'
import cbPersonal from "../components/personal/cbPersonal"
import managerial from "../components/managerial-position-vue/Managerial-Position"
import userManagement from '../pages/userManagement'
import userManagementWrite from '../components/cbManagement/userManagementWrite'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: "Index",
      component: Index,
      children: [
        {
          path: "recruit",
          component: recruit
        },
        {
          path: 'role',
          name: 'cbRole',
          component: cbRole
        },
        {
          path: "personal",
          name: "cbPersonal",
          component: cbPersonal
        },
        {
          path: "job",
          component: managerial
        },
        {
          path: 'customer',
          name: 'userManagement',
          component: userManagement
        },
        {
          path: 'userManagementWrite',
          name: 'userManagementWrite',
          component: userManagementWrite
        }
      ]
    }]}
)
