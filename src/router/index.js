/*
 * @Author: your name
 * @Date: 2022-04-08 15:17:34
 * @LastEditTime: 2022-04-11 11:27:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yeb/src/router/index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Test1 from "../views/Test1.vue";
import Test2 from "../views/Test2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    hidden: true,
  },
  {
    path: "/home",
    name: "导航一",
    component: Home,
    children:[
      {
        path: "/test1",
        name: "选项1",
        component: Test1,
      },
      {
        path: "/test2",
        name: "选项2",
        component: Test2,
      },
    ]
  },
  
];

const router = new VueRouter({
  routes,
});

export default router;
