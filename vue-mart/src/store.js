import Vue from 'vue'
import Vuex from 'vuex'
import us from './service/user'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogin: false
  },
  mutations: {
    setLoginState(state, b) {
      state.islogin = b;
    }
  },
  actions: {
    login({commit},user) {
      // 登录请求
      us.login(user).then(res => {
        const {code, token} = res.data;
        if (code) {
          // 登录成功
          commit('setLoginState',true);
          localStorage.setItem("token",token)
        }
        return code;
      });
    }
  }
});
