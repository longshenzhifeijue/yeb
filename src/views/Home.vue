<!--
 * @Author: your name
 * @Date: 2022-04-09 15:08:06
 * @LastEditTime: 2022-04-12 15:34:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yeb/src/views/Home.vue
-->
<template>
  <div>
    <el-container >
      <el-header  class="homeHeader">
          <div  class="title" >
              云E办
          </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu router unique-opened>
            <template v-for="(item, index) in routes">
              <el-submenu :index="index+''" v-if="!item.hidden" :key="index">
                <template slot="title"
                  ><i :class="item.iconCls" style="color: #1accff; margin-right: 6px"></i>{{ item.name }}</template
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

<style>
  .homeHeader {
    background-color: #409eff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 15px;
    box-sizing: border-box;
  }

  .homeHeader .title {
    font-size: 30px;
    font-family: 华文行楷;
    color: #ffffff;
  }

  .homeHeader .userInfo {
    cursor: pointer;
  }

  .homeWelcome {
    text-align: center;
    font-size: 30px;
    font-family: 华文行楷;
    color: #409eff;
    padding-top: 50px;
  }

  .homeRouterView {
    margin-top: 10px;
  }

  .el-dropdown-link img {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    margin-left: 8px;
  }

  .el-dropdown-link {
    display: flex;
    align-items: center;
  }
</style>