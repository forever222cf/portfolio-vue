import Vue from 'vue'
import Vuex from 'vuex'

import example from './modules/example'
import { UPDATE_INITIAL_STATE } from './action-types'

Vue.use(Vuex)

const state = {
  isInitialing: false
}

const mutations = {
  [UPDATE_INITIAL_STATE] (state, payload) {
    state.isInitialing = payload
  }
}

const actions = {
  [UPDATE_INITIAL_STATE] ({ commit }, payload) {
    commit(UPDATE_INITIAL_STATE, payload)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    example
  }
})
