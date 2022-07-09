<!--
 * @Author: your name
 * @Date: 2022-04-11 15:39:57
 * @LastEditTime: 2022-04-11 15:42:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yeb/src/views/emp/Empbasic.vue
-->
<template slot-scope="{}">
    <div>
        <div style="display:flex;justify-content:space-betwee n">

            <div>
                <el-input style="width:300px;margin-right:10px ; prefix-icon=:el-icon-search"
                    placeholder="请输入员工名进行搜索...">
                </el-input>
                <el-buttoon type="primary" icon="el-icon-search">搜索</el-buttoon>
                <el-button type="primary">
                    <i class="fa fa-angle-double-down" aria-hidden="true">
                    </i>
                    高级搜索
                </el-button>
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
        <div>
            <el-table :data="emps" stripe broder style="width: 100%">
                <el-table-column type="selection" width="55">

                </el-table-column>

                <el-table-column prop="name" label="姓名"  fixed width="50">
                </el-table-column>
                <el-table-column prop="workID" label="工号" width="90">
                </el-table-column>
                <el-table-column prop="gender" label="性别" width="85">
                </el-table-column>
                <el-table-column prop="birthday" label="出生日期" width="100">
                </el-table-column>

                <el-table-column prop="idCard" label="身份证号" width="85">
                </el-table-column>

                <el-table-column prop="wedlock" label="婚姻状况" width="85">
                </el-table-column>

                <el-table-column prop="nation.name" label="民族" width="50">
                </el-table-column>

                <el-table-column prop="nativePlace" label="籍贯" width="50">
                </el-table-column>

                <el-table-column prop="po" label="出生日期" width="85">
                </el-table-column>

                <el-table-column prop="birthday" label="出生日期" width="50">
                </el-table-column>

                <el-table-column prop="birthday" label="出生日期" width="85">
                </el-table-column>

                <el-table-column prop="birthday" label="出生日期" width="85">
                </el-table-column>

                <el-table-column prop="politicsStatus.name" label="政治面貌">
                </el-table-column>
                <el-table-column prop="email" width="180" label="电子邮件">
                </el-table-column>
                <el-table-column prop="phone" width="100" label="电话号码">
                </el-table-column>
                <el-table-column prop="address" width="220" label="联系地址">
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
                   <template slot-scope="scope">
                            <el-tag>{{scope.row.contraceTerm}}</el-tag>年
                   </template>
                </el-table-column>

                <el-table-column label="操作" fixed="right" width="200">
                    <template slot-scope="scope">
                        <el-button>编辑</el-button>
                        <el-button type="primary">查看高级资料</el-button>
                        <el-button type="danger">删除</el-button>

                    </template>
                </el-table-column>


            </el-table>
        </div>

    </div>
</template>

<script>
export default {
    name: "EmpBasic",
    data() {
        return {
            emps: []
        }
    },
    mounted() {
        this.initEmps();
    },
    methods: {
        initEmps() {
            this.getRequest('/employee/basic/list').then(resp => {
                if (resp) {
                    this.emps = resp.date;
                }
            })
        }
    },
}
</script>

<style scoped>
</style>