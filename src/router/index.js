/*
 * @Author: your name
 * @Date: 2022-04-08 15:17:34
 * @LastEditTime: 2022-04-09 12:24:30
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yeb/src/router/index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginLogin from '../views/LoginLogin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginLogin',
    component: LoginLogin
  }
]

const router = new VueRouter({
  routes
})

export default router
