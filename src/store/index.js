import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userLogin:0
  },
  getters:{
    isLogin(state){
      return state.userLogin
    }
  },
  mutations: {
    login(state,login=true){
      state.userLogin=login;
    },
    logout(state,login=false){
      state.userLogin=login;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({storage: window.sessionStorage})]
})
