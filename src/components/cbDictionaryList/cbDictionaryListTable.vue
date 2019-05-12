<template>
    <div class="DicTableBox">
        <!-- 按钮 -->
        <div class="BtnBox">
            <div class="leftBtn">
                <el-button type="primary" @click="addFormVisible = true"><i class="el-icon-plus"></i>新增</el-button>
                <el-button type="success" @click="upadteFormVisible = true"><i class="el-icon-edit-outline"></i>修改</el-button>
                <el-button type="danger" @click="del"><i class="el-icon-delete"></i>删除</el-button>
                <el-button type="info" @click="expo"><i class="el-icon-download"></i>导出</el-button>
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
                <el-table-column type="selection" width="55">
                </el-table-column>
                 <el-table-column label="字典主键" type="index" width="120">
                  <template></template>
                </el-table-column>
                <el-table-column prop="name" label="字典名称" width="120">
                </el-table-column>
                 <el-table-column prop="type" label="字典类型" width="120">
                  <template slot-scope="scope">{{ scope.row.type }}</template>
                </el-table-column>                  
                <el-table-column prop="status" label="状态" width="120">
                  <template>
                      <span slot-scope="scope" class="Status stopuse">{{scope.row.status}}
                     </span>
                  </template>
                </el-table-column>                 
                <el-table-column prop="remark" label="备注"  width="120">
                  <template slot-scope="scope">{{ scope.row.remark }}</template>
                </el-table-column> 
                <el-table-column prop="timer" label="创建时间" width="120">
                  <template slot-scope="scope">{{ scope.row.timer }}</template>
                </el-table-column>
                <el-table-column class="inside-btn"  prop="name" label="操作" width="300">
                    <el-button size="mini" type="primary"><i class="el-icon-edit-outline" @click="upadteFormVisible = true"></i>编辑</el-button>
                    <el-button size="mini" type="success"><router-link to="/index/dictionaryDataList"><i class="el-icon-s-fold"></i>列表</router-link></el-button>
                    <el-button size="mini" type="danger" @click="del"><i class="el-icon-delete"></i>删除</el-button>
                </el-table-column>

              </el-table>


<!-- 添加字典模态窗-->

              <el-dialog title="添加类型" :visible.sync="addFormVisible">
                <el-form :model="form">
                  <el-form-item label="字典名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>

                  <el-form-item label="字典类型" :label-width="formLabelWidth">
                    <el-input v-model="form.type" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="状态" :label-width="formLabelWidth">
                      <el-radio-group v-model="form.status">
                        <el-radio label="正常"></el-radio>
                        <el-radio label="停用"></el-radio>
                      </el-radio-group>
                  </el-form-item>
                <el-form-item label="备注" :label-width="formLabelWidth">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="addFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="addFormVisible = false">确 定</el-button>
                </div>
              </el-dialog>
<!-- 修改模态窗口 -->
              <el-dialog title="修改类型" :visible.sync="upadteFormVisible">
                <el-form :model="updateform">
                  <el-form-item label="字典名称" :label-width="formLabelWidth">
                    <el-input v-model="updateform.name" autocomplete="off"></el-input>
                  </el-form-item>

                  <el-form-item label="字典类型" :label-width="formLabelWidth">
                    <el-input v-model="updateform.type" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="状态" :label-width="formLabelWidth">
                      <el-radio-group v-model="updateform.status">
                        <el-radio label="正常"></el-radio>
                        <el-radio label="停用"></el-radio>
                      </el-radio-group>
                  </el-form-item>
                <el-form-item label="备注" :label-width="formLabelWidth">
                    <el-input type="textarea" v-model="updateform.desc"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="upadteFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="upadteFormVisible = false">确 定</el-button>
                </div>
              </el-dialog>

              <!-- <addDicWin/> -->
            </div>
         </div>       
</template>

<script>

// import addDicWin from './addDicWin'

export default {
    name:"cbDictionaryListTable",
    components:{
        // addDicWin

    },
    data(){
        return{
          // 表格数据
        tableData: [{
             name: '用户性别',
             type:'sys_user_sex',
             status:'正常',
             remark:'用户性别列表',
             timer: '2016-05-03',
             
            
             
           }
          //  , 
          //  {
          //    date: '2016-05-02',
          //    name: '用户性别',
          //    type:'sys_user_sex',
          //    remark:'用户性别列表'
          //  }, 
          //  {
          //    date: '2016-05-04',
          //    name: '用户性别',
          //    type:'sys_user_sex',
          //    remark:'用户性别列表'
          //  },
          //   {
          //    date: '2016-05-01',
          //    name: '用户性别',
          //    type:'sys_user_sex',
          //    remark:'用户性别列表'
          //  }, 
          //  {
          //    date: '2016-05-08',
          //    name: '用户性别',
          //    type:'sys_user_sex',
          //    remark:'用户性别列表'
          //  }, 
          //  {
          //    date: '2016-05-06',
          //    name: '用户性别',
          //    type:'sys_user_sex',
          //    remark:'用户性别列表'
          //  },
          //   {
          //    date: '2016-05-07',
          //    name: '用户性别',
          //    type:'sys_user_sex',
          //    remark:'用户性别列表'
          //  }
           ],
           multipleSelection: [],
       
          //添加弹框
           addFormVisible: false,
           form: {
             name: '',
             type: '',
             status: '',
             desc: ''
           },
          formLabelWidth: '100px',
          upadteFormVisible:false,
          updateform:{
            name: '',
             type: '',
             status: '',
             desc: ''
          }
       }
    },
   
    methods: {
        // 多选框checkedout
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        // 删除提示框
         del() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      // 导出提示框
       expo() {
        this.$confirm('确定导出所有类型吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
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
/* .normal{
      background-color:#67C23A;
}
.stopuse{
       background-color:#ed5565;
}
.Status{
    display: inline-block;
    widows: 36px;
    height: 20px;
    font-size: 11px;
    font-weight: 600;
    padding-bottom: 4px;
    padding-left: 6px;
    padding-right: 6px;
    color: #FFFFFF;
    border-radius: 10px;
} */
</style>
