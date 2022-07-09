/*
 * @Author: your name
 * @Date: 2022-04-08 14:01:05
 * @LastEditTime: 2022-04-11 10:27:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yeb/.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    // '@vue/standard'
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "space-before-function-paren": 0,
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["Test2", "Test1", "Login"], //需要忽略的组件名
      },
    ],
    "vue/no-unused-components": "off",
    "no-unused-vars": 'off'
  },
};
