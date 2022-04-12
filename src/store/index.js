/*
 * @Author: your name
 * @Date: 2022-04-08 14:01:05
 * @LastEditTime: 2022-04-12 14:27:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yeb/src/store/index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    routes: [],
  },
  getters: {},
  // 可以改变state值的方法,同步执行
  mutations: {
    initRoutes(state,data){
      state.routes =  data
    }
  },
  // 可以改变state值的方法,异步执行
  actions: {},
  modules: {},
});
export default store;
