<!--
 * @Author: your name
 * @Date: 2022-04-12 17:24:06
 * @LastEditTime: 2022-04-12 18:01:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yeb/src/components/sys/DepMana.vue
-->
<template>
  <div>
    <div>
      <el-input
        placeholder="添加部门"
        suffix-icon="el-icon-plus"
        v-model="pos.name"
      >
      </el-input>
    </div>
    <div></div>

  </div>
</template>

<script>
export default {
  name: "DepMana",
  data(){
      return{
          pos:{
              name:''
          }
      }
  }
};
</script>

<style scoped></style>
