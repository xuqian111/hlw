import Vue from 'vue'
import Router from 'vue-router'
import Index from "../pages/index";
import cbMain from '../components/cbMain'
import recruit from '../components/recruit/cbRecruit'
import cbRole from '../pages/cbRole'

Vue.use(Router)


export default new Router({
  routes: [{
      path: '/',
      redirect: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: "Index",
      component: Index,
      children: [{
          path: "recruit",
          component: recruit
        },
        {
          path: '/role',
          name: 'cbRole',
          component: cbRole
        }
      ]
    }
  ]
})
