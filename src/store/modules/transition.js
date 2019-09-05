import {
  UPDATE_POSITION,
  UPDATE_SLIDE_DIRECTION,
  UPDATE_TRANSITION_STATE
} from './../action-types'

const state = {
  slideDirection: 'up',
  currentPosition: 0,
  transitionTime: 1000, // ms
  isTransitioning: false
}

const getter = {}

const mutations = {
  [UPDATE_POSITION] (state, payload) {
    state.currentPosition = payload
  },
  [UPDATE_SLIDE_DIRECTION] (state, payload) {
    state.slideDirection = payload
  },
  [UPDATE_TRANSITION_STATE] (state, payload) {
    state.isTransitioning = payload
  }
}

const actions = {
  [UPDATE_POSITION] ({ commit }, payload) {
    commit(UPDATE_POSITION, payload)
  },
  [UPDATE_SLIDE_DIRECTION] ({ commit }, payload) {
    commit(UPDATE_SLIDE_DIRECTION, payload)
  },
  [UPDATE_TRANSITION_STATE] ({ commit }, payload) {
    commit(UPDATE_TRANSITION_STATE, payload)
  }
}

export default {
  namespaced: true,
  state,
  getter,
  mutations,
  actions
}
