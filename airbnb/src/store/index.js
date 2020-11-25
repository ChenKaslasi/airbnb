import Vue from 'vue'
import Vuex from 'vuex'

import { spaceStore } from './space.store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    spaceStore
  }
})
