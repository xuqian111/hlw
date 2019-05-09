import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    brumbs: ['1']
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
    }
  },
  actions: {
    intradd(context, obj) {
      context.commit({
        type: 'addBrumb',
        data: obj.data
      })
    }
  }
})
