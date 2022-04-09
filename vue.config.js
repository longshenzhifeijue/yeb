/*
 * @Author: your name
 * @Date: 2022-04-08 15:17:34
 * @LastEditTime: 2022-04-09 13:32:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yeb/vue.config.js
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})

const proxyObj = {};

proxyObj['/'] = {
  // websocket

  ws: false,
  target: 'http://localhost:8081',
  // 发送请求头host会被设置target
  changeOrigin: true,

  pathRewrite: {
    '^/': '/'
  }
}

module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: proxyObj,
  }
}
