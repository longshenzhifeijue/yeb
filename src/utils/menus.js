/*
 * @Author: your name
 * @Date: 2022-04-11 15:01:06
 * @LastEditTime: 2022-04-11 16:13:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yeb/src/utils/menus.js
 */
import router from "../router";
import { getRequest } from "./api";
import { resolve } from "core-js/es6/promise";

export const initMenu = (router, store) => {
  if (store.state.routers.length > 0) {
    return;
  }
  getRequest("/system/cfg/menu").then((data) => {
    if (data) {
        // 格式化Route
      let fmtRoutes = formatRoutes(data);
      // 添加到Route
      router.addRoutes(fmtRoutes);
      // 将数据存储到vuex
      store.commit('initRoutes',fmtRoutes)
    }
  });
};

export const formatRoutes = (routers) => {
  let fmtRoutes = [];
  routers.forEach(router => {
    let { path, component, name, iconCls, children } = router;

    if(children && children instanceof Array){
        // 递归
        children = formatRoutes(children);
    }
    // 单独对某一个router进行格式化
    let fomRouter{

        path: path,
        name: name,
        iconCls: iconCls,
        children : children,
        component(resolve){

            if(component.startsWith('Emp')){
                require(['../views/emp'+component+'.Vue'],resolve)
            }else if(component.startsWith('Per')){
                require(['../views/per'+component+'.Vue'],resolve)
            }else if(component.startsWith('Sal')){
                require(['../views/sal'+component+'.Vue'],resolve)
            }else if(component.startsWith('Sta')){
                require(['../views/sta'+component+'.Vue'],resolve)
            }else if(component.startsWith('Sys')){
                require(['../views/sys'+component+'.Vue'],resolve)
            }
        }

    }
    fmtRoutes.push(fomRouter)
   
  });
  return formatRoutes;
};
