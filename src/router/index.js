import Vue from 'vue'
import Router from 'vue-router'
import Index from "../pages/index"
import home from "../components/Home"
import recruit from '../components/recruit/cbRecruit'
import cbRole from '../components/cbRole/cbRole'
import login from '../pages/login'
import cbPersonal from "../components/personal/cbPersonal"
import managerial from "../components/managerial-position-vue/Managerial-Position"
import userManagement from '../components/cbRole/userManagement'
import AllocationUser from '../components/cbRole/cbAllocationUser'
import userManagementWrite from '../components/cbManagement/userManagementWrite'

/** 
 * 字典*/ 
import cbDictionaryList from '../components/cbDictionaryList/cbDictionaryList'
import cbDictionaryDataList from '../components/cbDictionaryDataList/cbDictionaryDataList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'Index',
      component: Index,
    
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      beforeEnter(to,from,next){
        let user = localStorage.getItem('user')
        next()
        if(user){
          next('/index')
        }else{
          console.log("err")
        }
      }
    },
    {
      path: '/index',
      name: "Index",
      component: Index,
      children: [
        {
          path:"",
          component:home
        },
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
          path: 'AllocationUser',
          name: 'AllocationUser',
          component: AllocationUser
        },
        {
          path: "personal",
          name: "cbPersonal",
          component: cbPersonal
        },
        /** 
         * 字典*/
         
        {
          path:'dictionary',
          name:'cbDictionaryList',
          component:cbDictionaryList         
        },
        {
          path:'dictionaryDataList',
          name:'cbDictionaryDataList',
          component:cbDictionaryDataList
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
