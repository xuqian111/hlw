<template>
    <div class="roleMain">

         <div class="main_top">
            <div class="main_but">
                <el-button icon="el-icon-plus" type="primary">新增</el-button>
                <el-button icon="el-icon-edit" type="success">修改</el-button>
                <el-button icon="el-icon-close" type="info">删除</el-button>
                <el-button icon="el-icon-download" type="warning">导出</el-button>
            </div>
            <div class="main_func">
                <div class="el-icon-search eIcon">
                    <div class='eIconTitle'>搜索</div>
                </div>
                <div class="el-icon-refresh eIcon">
                    <div class='eIconTitle' >刷新</div>
                </div>
                <div class="el-icon-tickets eIcon">
                    <div class='eIconTitle'>切换</div>
                </div>
                <div class="el-icon-menu eIcon">
                    <div class="el-icon-caret-bottom"></div>
                    <div class='eIconTitle'>列</div>
                </div>
            </div>
        </div>
        <div class="main_table">
            <el-table
                :data="tableData"
                style="width: 100%">
                    <el-table-column
                        type="selection"
                        width="36">
                    </el-table-column>
                    <el-table-column
                        prop="bianhao"
                        label="角色编号"
                        width="87">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="角色名称"
                        width="115">
                    </el-table-column>
                    <el-table-column
                        prop="quanxian"
                        label="权限字符"
                        width='115'>
                    </el-table-column>
                    <el-table-column
                        prop="shunxu"
                        label="显示顺序"
                        width="115">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="角色状态"
                        width='90'>
                            <el-switch
                                disabled='disabled'
                                v-model="value3">
                            </el-switch>
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="创建时间"
                        width='175'>
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="操作">
                            <el-button type="text"  @click="dialogFormVisible = true">
                                <el-button icon="el-icon-edit-outline" type="primary">编辑</el-button>
                            </el-button>
                                <el-dialog title="收货地址" 
                                    :visible.sync="dialogFormVisible" 
                                    :append-to-body = true
                                    @close="kcDialog = false">
                                    <el-form :model="form">
                                        <el-form-item label="角色名称" :label-width="formLabelWidth">
                                            <el-input v-model="form.name" autocomplete="off" placeholder="管理员"></el-input>
                                        </el-form-item>
                                        <el-form-item label="权限字符" :label-width="formLabelWidth">
                                            <el-input v-model="form.zifu" autocomplete="off" placeholder="admin"></el-input>
                                        </el-form-item>
                                        <el-form-item label="显示顺序" :label-width="formLabelWidth">
                                            <el-input v-model="form.shunxu" autocomplete="off" placeholder="1"></el-input>
                                        </el-form-item>
                                        <el-form-item label="状态" :label-width="formLabelWidth">
                                            <el-switch
                                                disabled='disabled'
                                                v-model="value3">
                                            </el-switch>
                                        </el-form-item>
                                        <el-form-item label='备注' :label-width="formLabelWidth">
                                            <el-input v-model="form.beizhu" autocomplete="off" placeholder="管理员"></el-input>
                                        </el-form-item>
                                        <cbRoleMainElementTree :defaultProps='defaultProps' :data='data'/>
                                    </el-form>
                                    <div slot="footer" class="dialog-footer">
                                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                                        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                                    </div>
                                </el-dialog>
                            <el-button type="text"  @click="dialogFormB = true">
                                <el-button icon="el-icon-circle-check" type="success">数据权限</el-button>
                            </el-button>
                                <el-dialog title="收货地址" 
                                    :visible.sync="dialogFormB" 
                                    :append-to-body = true
                                    @close="kcDialog = false">
                                    <el-form :model="form">
                                        <el-form-item label="角色名称" :label-width="formLabelWidth">
                                            <el-input v-model="form.name" autocomplete="off" placeholder="管理员"></el-input>
                                        </el-form-item>
                                        <el-form-item label="权限字符" :label-width="formLabelWidth">
                                            <el-input v-model="form.zifu" autocomplete="off" placeholder="admin"></el-input>
                                        </el-form-item>
                                        <el-form-item label="数据范围" :label-width="formLabelWidth">
                                            <el-input v-model="form.shunxu" autocomplete="off" placeholder="1"></el-input>
                                        </el-form-item>
                                        <cbRoleMainElementTree :defaultProps='defaultProps' :data='data'/>
                                    </el-form>
                                    <div slot="footer" class="dialog-footer">
                                        <el-button @click="dialogFormB = false">取 消</el-button>
                                        <el-button type="primary" @click="dialogFormB = false">确 定</el-button>
                                    </div>
                                </el-dialog>
                            <router-link to="/index/AllocationUser">
                                <el-button icon="el-icon-info" type="warning">分配用户</el-button>
                            </router-link>
                                <el-button icon="el-icon-close" type="danger">删除</el-button>
                    </el-table-column>
            </el-table>
            <div class="table_recode">
                第<span>1</span>到<span>2</span>条，共<span>2</span>条记录
            </div>
        </div>

    </div>
</template>

<script type='text/javascript'>
    import cbRoleMainElementTree from './cbRoleMainElementTree'
    export default {
        components:{
            cbRoleMainElementTree
        },
        name: "cbRoleMain",
        data() {
            return {
                value3: true,
                disabled: false,
                dialogFormVisible: false,
                dialogFormB:false,
                tableData: [{
                        bianhao:'1',
                        shunxu: '1',
                        name: '管理员',
                        time: '2018-05-02',
                        quanxian: 'admin'
                    },{
                        bianhao:'2',
                        shunxu: '2',
                        time: '2018-05-02',
                        name: '员工',
                        quanxian: 'common'
                    }],
                form: {
                    name: '',
                    beizhu: '',
                    shunxu: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    zifu: ''
                },
                formLabelWidth: '120px',
                data: [
                    {
                    id: 1,
                    label: '系统管理',
                        children: [{
                            id: 11,
                            label: '用户管理',
                            children: [{
                                id: 111,
                                label: '用户 1-1-1'
                                }, {
                                id: 112,
                                label: '用户 1-1-2'
                            }]
                        },{
                            id: 12,
                            label: '角色管理',
                            children: [{
                                id: 121,
                                label: '角色 1-1-1'
                                }, {
                                id: 122,
                                label: '角色 1-1-2'
                            }]
                        },{
                            id: 13,
                            label: '菜单管理'
                        },{
                            id: 14,
                            label: '部门管理',
                            children: [{
                                id: 141,
                                label: '部门 1-1-1'
                                }, {
                                id: 142,
                                label: '部门 1-1-2'
                            }]
                        },{
                            id: 15,
                            label: '岗位管理',
                            children: [{
                                id: 151,
                                label: '岗位 1-1-1'
                                }, {
                                id: 152,
                                label: '岗位 1-1-2'
                            }]
                        },{
                            id: 16,
                            label: '字典管理'
                        },{
                            id: 17,
                            label: '参数管理',
                            children: [{
                                id: 171,
                                label: '参数 1-1-1'
                                }, {
                                id: 172,
                                label: '参数 1-1-2'
                            }]
                        },{
                            id: 18,
                            label: '通知公告'
                        },{
                            id: 19,
                            label: '日志管理',
                            children: [{
                                id: 191,
                                label: '日志 1-1-1'
                                }, {
                                id: 192,
                                label: '日志 1-1-2'
                            }]
                        }]
                    }, {
                    id: 2,
                    label: '系统监控',
                        children: [{
                            id: 21,
                            label: '在线用户',
                            children: [{
                                id: 211,
                                label: '用户 1-1-1'
                                }]
                        }, {
                            id: 22,
                            label: '定时任务',
                            children: [{
                                id: 221,
                                label: '任务 1-1-1'
                                }, {
                                id: 222,
                                label: '任务 1-1-2'
                            }]
                        }]
                    }, {
                    id: 3,
                    label: '系统工具',
                        children: [{
                            id: 31,
                            label: '表单构建'
                        }, {
                            id: 32,
                            label: '代码生成',
                            children: [{
                                id: 331,
                                label: '代码 1-1-1'
                                }, {
                                id: 332,
                                label: '代码 1-1-2'
                            }, {
                                id: 333,
                                label: '代码 1-1-3'
                            }]
                        }, {
                            id: 33,
                            label: '系统接口'
                        }]
                    }
                ],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        methods: {
            
            
        }
    };
</script>

<style lang='scss' scoped>
.roleMain{
    padding: 0px;
    background-color: #fff;
}
.main_top:after{
    content:'';
    display: block;
    clear:both;
    overflow: hidden;
    visibility:hidden;
}
.main_but{
    float: left;    
    margin-top: 3px;
    .el-button--small{
        padding: 8px;
        margin-left: 0px;
        border:none;
        i::before{
            font-weight: 900;
        }
    }
    .el-button--small:first-child{
        background:#1c84c6;
    }
    .el-button--small:nth-of-type(2){
        background:#6cd9c3;
    }
    .el-button--small:nth-of-type(3){
        background:#f49ca6;
    }
    .el-button--small:last-child{
        background:#f8ac59;
    }
}
.main_func{
    // overflow: hidden;
    float: right;
    border: 1px solid #c2c2c2;
    border-radius: 3px;
    .eIcon{
        font-weight: 900;
        font-size:18px;
        padding:8px;
        margin:0px;
        color:#676a6c;
        // float:left;
        position:relative;
        .eIconTitle{
            color:#676a6c;
            font-size: 10px;
            padding:5px;
            border:  1px solid #c2c2c2;
            border-radius: 3px;
            position:absolute;
            left:5px;
            top:40px;
            background:#fff;
            display: none;
            z-index: 10;
        }
    }
    .el-icon-search{
        border-right: 1px solid #c2c2c2;
    }
    .el-icon-refresh{
        border-right: 1px solid #c2c2c2;
    }
    .el-icon-tickets{
        border-right: 1px solid #c2c2c2;
    }
    .eIcon:hover div.eIconTitle{
        display: block;
    }
}
.eIcon:hover{
    // background-color:#676a6cf;
    color:pink;

}
    /**
    * 表格table
    */
.has-gutter{
    background-color:#999;
}
.el-table__header-wrapper .el-table__header .has-gutter th.el-table_1_column_8 div.cell{
    text-align:center;
}
.el-table__row  td:nth-of-type(8) .cell button{
    margin:0;
    padding:6px 3px;
}
.table_recode{
    margin-top:12px;
    margin-bottom:12px;
    color:#676a6c;
    font-size:13px;
}
/**
*dialog弹出框
*/

.el-dialog__header {
    background: cadetblue  !important;
    padding: 20px 20px 10px !important;
}
</style>
