<!--
 * @Author: your name
 * @Date: 2022-04-12 17:24:43
 * @LastEditTime: 2022-04-13 17:32:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yeb/src/components/sys/JoblebelMana.vue
-->
<template>
  <div>
    <div>
      <el-input
        v-model="jl.name"
        size='small'
        placeholder="添加职称等级..."
        prefix-icon="el-icon-plus"
        style="width: 300px"
      ></el-input>
      <el-select
        size="small"
        v-model="jl.titleLevel"
        placeholder="职称等级"
        style="margin-left: 6px; margin-right: 6px"
      >
        <el-option
          v-for="item in titleLevels"
          :key="item"
          :label="item"
          :value="item"
        >
        </el-option>
      </el-select>

      <el-button type="primary" icon="el-icon-plus" size="small"
        >添加</el-button
      >
    </div>

    <div style="margin-top:10px">
      <el-table :data="jls" stripe border size='small' style="width: 70%">
        <el-table-column prop="id" label="编号" width="55"> </el-table-column>
        <el-table-column prop="name" label="职称名称" width="150">
        </el-table-column>
        <el-table-column prop="titleLevel" label="职称等级" width="150">
        </el-table-column>
        <el-table-column prop="createDate" label="创建日期" width="150">
        </el-table-column>
        <el-table-column prop="enabled" label="是否启用" width="150">
        </el-table-column>


        <el-table-column  label="操作" >
          <template slot-scope="scope">
             
                <el-button size="small" @click="showEditView(scope.$index, scope.row)">编辑</el-button>
                <el-button size="small" @click="sal">删除</el-button>

            </template>
        </el-table-column>

      </el-table>

    </div>
  </div>
</template>

<script>
export default {
  name: "JoblevelMana",
  data() {
    return {
      jl: {
        name: "",
        titleLevel: "",
      },
      titleLevels: ["正高级", "副高级", "中级", "初级", "员级"],
      jls: [],
    };
  },
};
</script>

<style scoped></style>
