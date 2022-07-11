<!--
 * @Author: your name
 * @Date: 2022-04-11 15:39:57
 * @LastEditTime: 2022-04-11 15:42:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yeb/src/views/emp/Empbasic.vue
-->
<template >
    <div>
        <div style="display:flex;justify-content:space-between">

            <div>
                <el-input style="width:300px;margin-right:10px ; prefix-icon=:el-icon-search"
                  v-model="empName" @keydown.enter.native="initEmps"  
                  clearable
                  @clear = "initEmps"
                  placeholder="请输入员工名进行搜索...">
                </el-input>
                <el-button type="primary" 
                
                icon="el-icon-search" @click="initEmps">搜索</el-button>

                <div>
                    <el-button type="primary">
                        <i class="fa fa-angle-double-down" aria-hidden="true">
                        </i>
                        高级搜索
                    </el-button>
                </div>

            </div>


            <div>
                <el-button type="success">
                    <i class="fa fa-level-up" aria-hidden="true"></i>
                    导入数据
                </el-button>

                <el-button type="success">
                    <i class="fa fa-level-down" aria-hidden="true"></i>
                    导出数据
                     
                </el-button>

                <el-button type="primary" icon="el-icon-plus"> 添加员工

                </el-button>
            </div>

        </div>
        <div style="margin-top：10px">

            <el-table :data="emps" stripe broder v-loading="loading" element-loading-text="拼命加载中"
                element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)"
                style="width: 100%">
                <el-table-column type="selection" width="55">

                </el-table-column>

                <el-table-column prop="name" label="姓名" fixed width="50">
                </el-table-column>
                <el-table-column prop="workID" label="工号" width="90">
                </el-table-column>
                <el-table-column prop="gender" label="性别" width="40">
                </el-table-column>
                <el-table-column prop="birthday" label="出生日期" width="100">
                </el-table-column>

                <el-table-column prop="idCard" label="身份证号" width="170">
                </el-table-column>

                <el-table-column prop="wedlock" label="婚姻状况" width="50">
                </el-table-column>

                <el-table-column prop="nation.name" label="民族" width="50">
                </el-table-column>

                <el-table-column prop="nativePlace" label="籍贯" width="50">
                </el-table-column>

                <el-table-column prop="birthday" label="出生日期" width="100">
                </el-table-column>

                <el-table-column prop="birthday" label="出生日期" width="100">
                </el-table-column>

                <el-table-column prop="politicsStatus.name" label="政治面貌">
                </el-table-column>
                <el-table-column prop="email" width="160" label="电子邮件">
                </el-table-column>
                <el-table-column prop="phone" width="120" label="电话号码">
                </el-table-column>
                <el-table-column prop="address" width="240" label="联系地址">
                </el-table-column>
                <el-table-column prop="department.name" width="100" label="所属部门">
                </el-table-column>
                <el-table-column prop="position.name" width="100" label="职位">
                </el-table-column>
                <el-table-column prop="joblevel.name" width="100" label="职称">
                </el-table-column>
                <el-table-column prop="engageForm" width="100" label="聘用形式">
                </el-table-column>
                <el-table-column prop="tiptopDegree" label="最高学历">
                </el-table-column>



                <el-table-column prop="school" width="150" label="毕业院校">
                </el-table-column>
                <el-table-column prop="specialty" width="150" label="专业">
                </el-table-column>
                <el-table-column prop="workState" width="70" label="在职状态">
                </el-table-column>
                <el-table-column prop="beginDate" width="95" label="入职日期">
                </el-table-column>
                <el-table-column prop="conversionTime" width="95" label="转正日期">
                </el-table-column>
                <el-table-column prop="beginContract" width="95" label="合同起始日期">
                </el-table-column>
                <el-table-column prop="endContract" width="95" label="合同截止日期">
                </el-table-column>

                <el-table-column prop="contractTerm" width="100" label="合同期限">
                    <!-- <template slot-scope="scope"> -->
                    <template>

                        <!-- <el-tag>{{ scope.row.contraceTerm }}</el-tag>年 -->
                    </template>
                </el-table-column>

                <el-table-column label="操作" fixed="right" width="310">
                    <!-- <template slot-scope="scope"> -->
                    <template>

                        <el-button>编辑</el-button>
                        <el-button type="primary">查看高级资料</el-button>
                        <el-button type="danger">删除</el-button>

                    </template>
                </el-table-column>
            </el-table>
            <div style = "display :flex;justify-content: flex-end;">

            <el-pagination background 
            @current-change="currentChange"
            @size-change="sizeChange"
            layout="sizes,prev, pager, next, jumper, ->, total" :total="total">
            </el-pagination>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "EmpBasic",
    data() {
        return {
            emps: [],
            loading: false,
            total:0,
            currentPage:1,
            size:10,
            empName:''
        }
    },
    mounted() {
        this.initEmps();
    },
    methods: {
        currentChange(currentPage){
          this.currentPage=currentPage;
          this.initEmps();      
        },
        sizeChange(size){
            this.size =size;
            this.initEmps();
        },
        initEmps() {
            this.loading = true;
            this.getRequest('/employee/basic/list?currentPage='+this.currentPage+'&size='+this.size+'&name='+this.empName).then(resp => {
                this.loading = false;
                if (resp) { 
                    this.emps = resp.date;
                    this.total=resp.total;
                }
            })
        }
    },
}
</script>

<style scoped>
</style>