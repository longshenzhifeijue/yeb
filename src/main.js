/*
 * @Author: your name
 * @Date: 2022-04-08 14:01:05
 * @LastEditTime: 2022-04-11 16:33:56
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

// 插件形式使用请求
import { postRequest } from './utils/api'
import { putRequest } from './utils/api'
import { getRequest } from './utils/api'
import { deleteRequest } from './utils/api'
import Router from 'vue-router'



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

// 导航守卫
router.beforeEach((to,from,next)=>{
  console.log(to);
  console.log(from);
  // 跳转到to中
  next();
//  next('/');
//   next(false);
// 导航会被终止
//  next(error);


})



new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
