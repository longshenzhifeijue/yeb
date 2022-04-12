<!--
 * @Author: your name
 * @Date: 2022-04-09 15:08:06
 * @LastEditTime: 2022-04-12 14:31:06
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
          <el-menu router>
            <template v-for="(item, index) in routes">
              <el-submenu index="1" v-if="!item.hidden" :key="index">
                <template slot="title"
                  ><i class="el-icon-location"></i>{{ item.name }}</template
                >
                <el-menu-item
                  :index="children.path"
                  v-for="(children, index) in item.children"
                  :key="index"
                  >{{ children.name }}</el-menu-item
                >
              </el-submenu>
            </template>
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
  computed: {
    routes() {
      return this.$store.state.routes;
    },
  },
};
</script>

<style scoped></style>
