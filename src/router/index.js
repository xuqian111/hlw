import Vue from 'vue'
import Router from 'vue-router'
import Index from "../pages/index";
import recruit from '../components/recruit/cbRecruit'
import cbRole from '../pages/cbRole'
import login from '../pages/login'
import cbPersonal from "../components/personal/cbPersonal"
import managerial from "../components/managerial-position-vue/Managerial-Position"

/** 
 * 字典*/ 
import cbDictionaryList from '../components/cbDictionaryList/cbDictionaryList'
import cbDictionaryDataList from '../components/cbDictionaryDataList/cbDictionaryDataList'
Vue.use(Router)


export default new Router({
  routes: [{
      path: '/',
      redirect: 'Index',
      component: Index,
    
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
      children: [{
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
        /** 
         * 字典*/
         
        {
          path:'cbDictionaryList',
          name:'cbDictionaryList',
          component:cbDictionaryList         
        },
        {
          path:'cbDictionaryDataList',
          name:'cbDictionaryDataList',
          component:cbDictionaryDataList
        },
        {
          path: "job",
          component: managerial
        }
      ]
    }
  ]
})
