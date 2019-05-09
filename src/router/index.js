import Vue from 'vue'
import Router from 'vue-router'
import a from '../components/a'
import b from '../components/b'
import c from '../components/c'
import d from '../components/d'
import Index from "../pages/index";

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
        path: 'user',
        component: a,
      }, {
        path: 'role',
        component: b,
      }, {
        path: 'job',
        component: c,
      }, {
        path: 'part',
        component: d,
      }, ]
    }
  ]
})
