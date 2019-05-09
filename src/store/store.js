import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    brumbs: []
  },
  getters: {
    getbrumbs(state) {
      return state.brumbs
    }
  },
  mutations: {
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
      state.brumbs.splice(n, 1)

    },
    clear(state, obj) {
      state.brumbs = []
    }
  },
  actions: {
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
    },
    clear(context, obj) {
      context.commit({
        type: 'clear',
        data: obj.data
      })
    }
  }
})
