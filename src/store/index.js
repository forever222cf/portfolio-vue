import Vue from 'vue'
import Vuex from 'vuex'

import example from './modules/example'
import about from './modules/about'
import transition from './modules/transition'

import { UPDATE_WELCOME_STATE } from './action-types'

Vue.use(Vuex)

const state = {
  isWelcoming: true
}

const mutations = {
  [UPDATE_WELCOME_STATE] (state, payload) {
    state.isWelcoming = payload
  }
}

const actions = {
  [UPDATE_WELCOME_STATE] ({ commit }, payload) {
    commit(UPDATE_WELCOME_STATE, payload)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    example,
    about,
    transition
  }
})
