import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutation';
import actions from './action';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    username: '', //用户名
  },
  mutations,
  actions
});
