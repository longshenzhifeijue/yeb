/*
 * @Author: your name
 * @Date: 2022-04-08 14:01:05
 * @LastEditTime: 2022-04-11 14:54:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yeb/src/store/index.js
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 全局对象,保存所有组件公共数据
  state: {
    routes:[]
  },
  getters: {},
  // 可以改变state值的方法
  mutations: {
    initRoutes(state,data){
      state.routes =  data
    }
  },

  actions: {},
  modules: {},
});
