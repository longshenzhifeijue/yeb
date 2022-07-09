<!--
 * @Author: your name
 * @Date: 2022-04-11 15:39:41
 * @LastEditTime: 2022-04-11 15:41:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yeb/src/views/emp/empAdv.vue
-->
<template>
    <div>
        <div>

            <div>
                <el-input style="width: 300px;margin-right:10px ; prefix-icon=:el-icon-search"
                    placeholder="请输入员工名进行搜索...">
                </el-input>


                <el-button type = "primary" icon= "el-icon-search">搜AAAAAAAAAAAAAAA索</el-button>
               
                <!-- <el-button type="primary">
                    <i class="fa fa-angle-double-down" aria-hidden="true">
                    </i>
                    高级搜索

                </el-button> -->
            </div>


            <!-- <div>

                <el-buttton type="success">
                    <i class="fa fa-level-up" aria-hidden="true"></i>
                    导入数据
                </el-buttton>
                <el-buttton type="success">
                    <i class="fa fa-level-down" aria-hidden="true"></i>
                    导出数据
                </el-buttton>

                <el-button type="primary" icon="el-icon-plus"> 添加员工

                </el-button>
            </div> -->

        </div>

    </div>
</template>
<script>
export default {
    name: "EmpAdv"
}
</script>
<style scoped>
</style>