<!--
 * @Author: your name
 * @Date: 2022-04-12 17:24:06
 * @LastEditTime: 2022-04-14 17:18:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yeb/src/components/sys/DepMana.vue
-->
<template>
  <div style="width:500px"> 
    <el-input
      placeholder="请输入部门名称进行搜索"
      prefix-icon="el-icon-search"
      v-model="filterText"
    >
    </el-input>

    <el-tree
      :data="deps"
      :props="defaultProps"
      :filter-node-method="filterNode"
      ref="tree"
    >
    </el-tree>
  </div>
</template>

<script>
export default {
  name: "DepMana",
  data() {
    return {
      filterText: "",
      deps: [],
      defaultProps: {
        children: "children",
        label: "name",
      },
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },
  mounted() {
    this.initDeps();
  },
  methods: {
    initDeps() {
      this.getRequest("/system/basic/department/").then((resp) => {
        if (resp) {
          this.deps = resp;
        }
      });
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.name.indexOf(value) !== -1;
    },
  },
};
</script>

<style scoped></style>
