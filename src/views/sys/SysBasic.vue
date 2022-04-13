<!--
 * @Author: your name
 * @Date: 2022-04-11 16:00:15
 * @LastEditTime: 2022-04-13 16:30:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yeb/src/views/sys/SysBasic.vue
-->
<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="部门管理" name="DepMana">
        <h1><DepMana></DepMana></h1>
        <table border="1">
          <tr>
            <td>姓名</td>
            <td>地址</td>
          </tr>
          <tr>
            <td>张三</td>
            <td>李四</td>
          </tr>
        </table>
      </el-tab-pane>
      <el-tab-pane label="职位管理" name="PosMana"><PosMana></PosMana></el-tab-pane>
      <el-tab-pane label="职称管理" name="JoblevelMana"><JoblevelMana></JoblevelMana></el-tab-pane>

      <el-tab-pane label="奖惩规则" name="EcMana"><EcMana></EcMana></el-tab-pane>
      <el-tab-pane label="权限组" name="PermissMana"><PermissMana></PermissMana></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import DepMana from "../../components/sys/basic/DepMana";

import EcMana from "@/components/sys/basic/EcMana";
import JoblevelMana from "@/components/sys/basic/JoblevelMana";
import PermissMana from "@/components/sys/basic/PermissMana";
import PosMana from "@/components/sys/basic/PosMana";

export default {
  name: "SysBasic",
  data() {
    return {
      activeName: "JoblevelMana",
    };
  },
  components: {
    DepMana,
    EcMana,
    JoblevelMana,
    PermissMana,
    PosMana
  },
};
</script>
<style scoped></style>
