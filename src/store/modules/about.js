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
      id: 'languages',
      position: 3,
      component: 'Languages'
    },
    {
      id: 'personalities',
      position: 4,
      component: 'Personalities'
    },
    {
      id: 'hobbies',
      position: 5,
      component: 'Hobbies'
    }
  ]
}

const getters = {}

const mutations = {}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
