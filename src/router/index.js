import Vue from 'vue'
import Router from 'vue-router'
import a from '../components/a'
import b from '../components/b'
import c from '../components/c'
import d from '../components/d'
import Index from "../pages/index"
import cbMain from '../components/cbMain'

// 字典
import cbDictionaryList from '../components/cbDictionaryList/cbDictionaryList'
import cbDictionaryDataList from '../components/cbDictionaryDataList/cbDictionaryDataList'
Vue.use(Router)


export default new Router({
  routes: [{
      path: '/',
      redirect: 'Index',
      component: Index,
      children:[
        {
          path:'cbDictionaryList',
          component:cbDictionaryList,
          children:[
            // {
            //   path:'/',
            //   component:cbDictionaryList
            // },
            {
              path:'cbDictionaryDataList',
              component:cbDictionaryDataList
            }
          ]
        }
      ]
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
