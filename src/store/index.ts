import { createStore } from 'vuex'
/* eslint @typescript-eslint/no-var-requires: "off" */
/* eslint-disable  @typescript-eslint/no-explicit-any */


const store = createStore({
  state: {
    isMenuShow: false
  },

  mutations: {
    setMenuState(state, isShowMenu)
    {
      state.isMenuShow = isShowMenu
    }
  },

  actions: {

  },

  getters: {

  },
})

export default store