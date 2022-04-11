<!--
 * @Author: your name
 * @Date: 2022-04-09 15:08:06
 * @LastEditTime: 2022-04-11 10:45:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yeb/src/views/Home.vue
-->
<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu @select="menuClick">
            <el-submenu index="1">
              <template slot="title"
                ><i class="el-icon-location"></i>导航一</template
              >
              <el-menu-item index="/test1">选项1</el-menu-item>
              <el-menu-item index="/test2">选项2</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-main>
          <router-view> </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  methods:{
      menuClick(index){
          this.$router.push(index);
      }
  }
};
</script>

<style scoped></style>
