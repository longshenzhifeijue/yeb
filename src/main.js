/*
 * @Author: your name
 * @Date: 2022-04-08 14:01:05
 * @LastEditTime: 2022-04-12 17:02:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yeb/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css' 
// 插件形式使用请求
import { postRequest } from './utils/api'
import { putRequest } from './utils/api'
import { getRequest } from './utils/api'
import { deleteRequest } from './utils/api'
import Router from 'vue-router'
import { initMenu } from './utils/menus'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'
 
fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.postRequest = postRequest
Vue.prototype.putRequest = putRequest
Vue.prototype.getRequest = getRequest
Vue.prototype.deleteRequest = deleteRequest

// 全局前置(导航守卫)
router.beforeEach((to, from, next) => {


  if(window.sessionStorage.getItem('tokenStr')){
    initMenu(router,store);

    // 判断用户信息是否存在
    if (!window.sessionStorage.getItem("user")) {
      return getRequest('/admin/info').then(resp => {
        if (resp) {
          // 存入用户信息
          window.sessionStorage.setItem("user", JSON.stringify(resp));
          next();
        }
      })
    }

     //存入用户信息
    next();
  }else{
    if(to.path=='/'){
      next();
    }else{
      next('/?redirect='+to.path )
    }
  }


})



new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
