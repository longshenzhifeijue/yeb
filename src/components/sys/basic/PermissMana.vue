<!--
 * @Author: your name
 * @Date: 2022-04-12 17:25:02
 * @LastEditTime: 2022-04-13 23:08:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yeb/src/components/sys/PermissMana.vue
-->
<template>
  <div>
    <div class="permissManaTool">
      <el-input
        size="small"
        v-model="role.name"
        placeholder="请输入角色英文名 "
      >
        <template slot="prepend">ROLE_</template>
      </el-input>
      <el-input
        size="small"
        v-model="role.name"
        placeholder="请输入角色中文名 "
      >
      </el-input>
      <el-button size="small" type="primary" icon="el-icon-plus"
        >添加角色</el-button
      >
    </div>

    <div>
      <el-collapse accordion class="permissManaMain" @change="change">
        <el-collapse-item
          :title="r.nameZh"
          :name="r.id"
          v-for="(r, index) in roles"
          :key="index"
        >
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>可访问资源</span>
              <el-button
                style="float: right; padding: 3px 0"
                type="text"
                icon="el-icon-delete"
              ></el-button>
            </div>

            <div>
              <el-tree show-checkbox :data="allMenus" :props="defaultProps"></el-tree>
            </div>
          </el-card>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: "PermissMana",
  data() {
    return {
      role: {
        name: "",
        nameZh: "",
      },
      roles: [],
      allMenus: [],
      defaultProps: {
        children: "children",
        label: "name",
      },
    };
  },
  mounted() {
    this.initRoles();
  },
  methods: {
    change(rid) {
        if(rid){
                this.initAllMenus();
        }
    },
    initAllMenus(){
            this.getRequest('/system/basic/permission/menus/').then(resp=>{
                if(resp){
                    this.allMenus = resp;
                }
            })
    },
    initRoles() {
      this.getRequest("/system/basic/permission/").then((resp) => {
        if (resp) {
          this.roles = resp;
        }
      });
    },
  },
};
</script>

<style>
.permissManaTool {
  display: flex;
  justify-content: flex-start;
}
.permissManaTool .el-input {
  width: 300px;
  margin-left: 6px;
}
.permissManaMain {
  width: 700px;
  margin-top: 10px;
}
</style>
