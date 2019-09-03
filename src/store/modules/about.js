import {
  UPDATE_POSITION,
  UPDATE_SLIDE_DIRECTION,
  UPDATE_TRANSITION_STATE
} from './../action-types'

const state = {
  sections: [
    {
      id: 'banner',
      position: 0,
      component: 'Banner'
    },
    {
      id: 'introductions',
      position: 1,
      component: 'Introductions'
    },
    {
      id: 'skills',
      position: 2,
      component: 'Skills'
    },
    {
      id: 'hobbies',
      position: 3,
      component: 'Hobbies'
    },
    {
      id: 'languages',
      position: 4,
      component: 'Languages'
    },
    {
      id: 'personalities',
      position: 5,
      component: 'Personalities'
    }
  ],
  slideDirection: 'slide-up',
  currentPosition: 0,
  isTransitioning: false
}

const getters = {}

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
  getters,
  mutations,
  actions
}
