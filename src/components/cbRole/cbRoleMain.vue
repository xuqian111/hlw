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
                            <el-button icon="el-icon-edit-outline" type="primary">编辑</el-button>
                            <el-button icon="el-icon-circle-check" type="success">数据权限</el-button>
                            <el-button icon="el-icon-info" type="warning">分配用户</el-button>
                            <el-button icon="el-icon-close" type="danger">删除</el-button>
                    </el-table-column>
            </el-table>
            <div class="table_recode">
                第<span>1</span>到<span>2</span>条，共<span></span>条记录
            </div>
        </div>
    </div>
</template>

<script type='text/javascript'>
    export default {
        name: "cbRoleMain",
        data() {
            return {
                value3: true,
                disabled: false,
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
                    },]
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
</style>
