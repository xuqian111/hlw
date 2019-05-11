<template>
    <div class="DicTableBox">
        <!-- 按钮 -->
        <div class="BtnBox">
            <div class="leftBtn">
                  <el-button type="primary" @click="addDicData = true"><i class="el-icon-plus"></i>新增</el-button>
                  <el-button type="success" @click="updateDicData = true"><i class="el-icon-edit-outline"></i>修改</el-button>
                  <el-button type="danger" @click="delData"><i class="el-icon-delete"></i>删除</el-button>
                  <el-button type="info" @click="expoData"><i class="el-icon-download"></i>导出</el-button>
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
                    <el-button type="primary" @click="updateDicData = true"><i class="el-icon-edit-outline"></i>编辑</el-button>
                    <el-button type="danger" @click="delData"><i class="el-icon-delete"></i>删除</el-button>
                </el-table-column>

              </el-table>

             </div>
             <!-- 添加字典模态窗-->

              <el-dialog title="添加数据" :visible.sync="addDicData">
                <el-form :model="form">
                  <el-form-item label="字典编码" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>

                  <el-form-item label="字典键值" :label-width="formLabelWidth">
                    <el-input v-model="form.key" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="字典类型" :label-width="formLabelWidth">
                    <el-input v-model="form.type" autocomplete="off"></el-input>
                  </el-form-item>

                  <el-form-item label="样式属性" :label-width="formLabelWidth">
                    <el-input v-model="form.cssAttr" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="字典排序" :label-width="formLabelWidth">
                    <el-input v-model="form.sort" autocomplete="off"></el-input>
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
                  <el-button @click="addDicData = false">取 消</el-button>
                  <el-button type="primary" @click="addDicData = false">确 定</el-button>
                </div>
              </el-dialog>


             <!-- 修改字典数据模态窗-->

              <el-dialog title="修改数据" :visible.sync="updateDicData">
                <el-form :model="updateform">
                  <el-form-item label="字典编码" :label-width="formLabelWidth">
                    <el-input v-model="updateform.name" autocomplete="off"></el-input>
                  </el-form-item>

                  <el-form-item label="字典键值" :label-width="formLabelWidth">
                    <el-input v-model="updateform.key" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="字典类型" :label-width="formLabelWidth">
                    <el-input v-model="updateform.type" autocomplete="off"></el-input>
                  </el-form-item>

                  <el-form-item label="样式属性" :label-width="formLabelWidth">
                    <el-input v-model="updateform.cssAttr" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="字典排序" :label-width="formLabelWidth">
                    <el-input v-model="updateform.sort" autocomplete="off"></el-input>
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
                  <el-button @click="updateDicData = false">取 消</el-button>
                  <el-button type="primary" @click="updateDicData = false">确 定</el-button>
                </div>
              </el-dialog>
           </div>
</template>

<script>


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
            multipleSelection: [],
            // 添加数据模态窗口
             
            addDicData: false,
            formLabelWidth: '100px',
            form: {
             name: '',
             key:'',
             cssAttr:'',
             type: '',
             status: '',
             sort:'',
             desc: ''
           },
            // 修改数据模态窗口
           updateDicData: false,
            updateform: {
             name: '',
             key:'',
             cssAttr:'',
             type: '',
             status: '',
             sort:'',
             desc: ''
           }           
        }
         //添加弹框
           

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
          },

           // 删除提示框
         delData() {
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
       expoData() {
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
</style>
