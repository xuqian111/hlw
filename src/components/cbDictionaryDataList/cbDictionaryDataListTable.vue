<template>
    <div class="DicTableBox">
        <!-- 按钮 -->
        <div class="BtnBox">
            <div class="leftBtn">
                  <el-button type="primary"><i class="el-icon-plus"></i>新增</el-button>
                  <el-button type="success"><i class="el-icon-edit-outline"></i>修改</el-button>
                  <el-button type="danger"><i class="el-icon-delete"></i>删除</el-button>
                  <el-button type="info"><i class="el-icon-download"></i>导出</el-button>
            </div>
            <div class="rightBtn">
                <el-button-group>
                     <el-button icon="el-icon-search"></el-button>
                     <el-button icon="el-icon-refresh"></el-button>
                     <el-button icon="el-icon-tickets"></el-button>
                     <el-button icon="el-icon-s-grid"></el-button>
                </el-button-group>
            </div>
        </div>

        <!-- 表单 -->
        <div class="tableContent">
            <el-table
                ref="multipleTable" :data="tableData" tooltip-effect="dark"  style="width: 100%"
                @selection-change="handleSelectionChange">
                <el-table-column
                  type="selection"
                  width="55">
                </el-table-column>
                 <el-table-column
                  label="字典编码"
                  type="index"
                  width="120">
                  <template></template>
                </el-table-column>
                <el-table-column
                  prop="tag"
                  label="字典标签"
                  width="120">
                </el-table-column>
                 <el-table-column
                  label="字典键值"
                  width="120">
                  <template slot-scope="scope">{{ scope.row.key }}</template>
                </el-table-column> 
                  <el-table-column
                  label="字典编码"
                  type="index"
                  width="120">
                  <template></template>
                </el-table-column>           
                 <el-table-column
                  label="状态"
                  width="120">
                  <template>
                      <el-button
                         size="mini"
                         type="success" round>正常
                     </el-button>
                  </template>
                </el-table-column>                 
                <el-table-column
                  label="备注"
                  width="120">
                  <template slot-scope="scope">{{ scope.row.remark }}</template>
                </el-table-column> 
                <el-table-column
                  label="创建时间"
                  width="120">
                  <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                class="inside-btn"
                  prop="name"
                  label="操作"
                  width="300">
                    <el-button type="primary"><i class="el-icon-edit-outline"></i>编辑</el-button>
                    <el-button type="danger"><i class="el-icon-delete"></i>删除</el-button>
                </el-table-column>

              </el-table>
              <div style="margin-top: 20px">
                <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
                <el-button @click="toggleSelection()">取消选择</el-button>
              </div>
                    </div>
                </div>
</template>

<script>
// import dataleft from './dataleft'


export default {
    name:"cbDictionaryDataListTable",
    components:{


    },
    data(){
        return{
        tableData: [{
          tag:'男',
          date: '2016-05-03',
          key: 0,
          type:'sys_user_sex',
          remark:'性别男'
        }, 
        {
          tag:'女',
          date: '2016-05-02',
          key: 1,
          type:'sys_user_sex',
          remark:'性别女'
        }, 
        {
          tag:'未知',
          date: '2016-05-04',
          key: 2,
          type:'sys_user_sex',
          remark:'性别未知',
        }],
        multipleSelection: []
        }
    },
   
        methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    
  }
    
}
</script>

<style scoped>
.DicTableBox{
    width: 100%;
    background: #fff;
    border-radius: 6px;
    margin-top: 10px;
    padding-top: 5px;
    padding-bottom: 13px;
    box-shadow: 1px 1px 3px rgba(0,0,0,.2);
    padding: 15px 15px;
    box-sizing: border-box;
    overflow: hidden;
}
/* 按钮 */
.BtnBox{
margin-top: 10px;
overflow: hidden;
}
.leftBtn{
   float:left; 
}
.rightBtn{
   float:right; 
}
.leftBtn .el-button{
    text-align: center;
    margin-left: 0px;
}
.leftBtn i{
    margin-right:3px;
}
.rightBtn .el-button-group .el-button{
    font-size: 20px;
    font-weight: 900;
}


.inside-btn .el-button{
    width: 48px;
    height: 22px;
}
</style>
