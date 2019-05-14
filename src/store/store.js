import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  brumbs: [],
  user: {},
  num :''
}

const actions = {
  inUser(context, obj) {
    context.commit({
      type: 'updateUser',
      data: obj.data
    })
  },
  intradd(context, obj) {
    context.commit({
      type: 'addBrumb',
      data: obj.data
    })
  },
  untradd(context, obj) {
    context.commit({
      type: 'deleteBrumb',
      data: obj.data
    })
    console.log('ac', obj.data)
  },
  clear(context) {
    context.commit({
      type: 'clear'
    })
  },
  lastOne(context, obj) {
    // console.log('last', obj)
    context.commit({
      type: 'last',
      data: obj.data
    })
  }
}

const mutations = {
  updateUser(state, obj) {
    state.user = obj.data
  },
  writeIndex(state,i){
    state.num = i
  },
  addBrumb(state, obj) {
    let str = obj.data;
    let has = false;
    state.brumbs.some((item) => {
      if (item == str) {
        has = true
        return true
      }
    })
    if (!has) {
      state.brumbs.push(str)
    }
  },
  deleteBrumb(state, obj) {
    let n = obj.data;
    if (n != null) {
      state.brumbs.splice(n, 1)
    }
  },
  clear(state, obj) {
    state.brumbs.splice(0)
  },
  last(state, obj) {
    let a = state.brumbs.pop(obj.data)
    state.brumbs.splice(0)
    state.brumbs.push(a)
  }
}

const getters = {
  getbrumbs(state) {
    return state.brumbs
  },
  getUser(state) {
    return state.user
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
