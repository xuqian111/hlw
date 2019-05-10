<template>
    <div class="Ma_Po_Se_Con2">
      <div class="Ma_Po_Se_Con2_Midd">
        <div class="Ma_Po_Se_Con2_Card">
          <div class="Ma_Po_Se_Con2_Card_Btn">
            <div class="Ma_Po_Se_Con2_Card_Btn_left">
              <el-row class="Ma_Po_Se_Con2_Card_Btn_left_lists">
                <el-button type="primary" icon="el-icon-plus" class="Ma_Po_Se_Con2_Card_Btn_left_lists_single">新增</el-button>
                <el-button type="success" icon="el-icon-edit"  class="Ma_Po_Se_Con2_Card_Btn_left_lists_single">修改</el-button>
                <el-button type="warning" icon="el-icon-close"  class="Ma_Po_Se_Con2_Card_Btn_left_lists_single">删除</el-button>
                <el-button type="danger" icon="el-icon-download "  class="Ma_Po_Se_Con2_Card_Btn_left_lists_single">导出</el-button>
              </el-row>
            </div>
            <div class="Ma_Po_Se_Con2_Card_Btn_right">
              <el-button-group>
                <el-button icon="el-icon-search" class="Ma_Po_Se_Con2_Card_Btn_right_lists_single"></el-button>
                <el-button  icon="el-icon-refresh" class="Ma_Po_Se_Con2_Card_Btn_right_lists_single"></el-button>
                <el-button icon="el-icon-tickets" class="Ma_Po_Se_Con2_Card_Btn_right_lists_single"></el-button>
                <el-button icon="el-icon-s-grid" class="Ma_Po_Se_Con2_Card_Btn_right_lists_single">
                  <span class="el-icon-caret-bottom"></span>
                  <!--<div class=""></div>-->
                </el-button>
              </el-button-group>
            </div>

          </div>
          <div class="Ma_Po_Se_Con2_Card_Table">
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange">
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                label="岗位编号"
                width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column
                prop="datenum"
                label="岗位编码"
                width="120">
              </el-table-column>
              <el-table-column
                prop="name"
                label="岗位名称"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="shunxu"
                label="显示顺序"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="states"
                label="状态"
                show-overflow-tooltip>
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">正常</el-button>
                </template>
              </el-table-column>
              <el-table-column
                prop="time"
                label="创建时间"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="Ma_Po_Se_Con2_Card_Sum">
            <p class="Ma_Po_Se_Con2_Card_Text">第 1 到 4 条，共 4 条记录。
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

    export default {
        name: "Managerial_Position_Con2",
      data() {
        return {
          name:"",
          tableData: [
            {
            date: 1,
            datenum:'ceo',
            name: '董事长',
            shunxu:1,
            states:"正常",
            time:"2018-03-16 11:33:00",
          },
            {
              date: 2,
              datenum:'se',
              name: '项目经理',
              shunxu:2,
              states:"正常",
              time:"2018-03-16 11:33:00",

            },
            {
              date: 3,
              datenum:'hr',
              name: '人力资源',
              shunxu:3,
              states:"正常",
              time:"2018-03-16 11:33:00",

            },
            {
              date: 4,
              datenum:'user',
              name: '普通员工',
              shunxu:4,
              states:"正常",
              time:"2018-03-16 11:33:00",

            },
          ]
        }
      },
    }
</script>

<style scoped>
  .Ma_Po_Se_Con2{
    width:100%;
    padding-top: 10px;
    box-sizing: border-box;
    background-clip: content-box;
  }
  .Ma_Po_Se_Con2_Midd{
    width:100%;
    height:100%;
    background: #ffffff;
    border-radius: 6px;
    box-shadow: 2px 1px 3px 0.5px #e1e1e2;
    border :1px solid #ececed;
    box-sizing: border-box;
  }
 .Ma_Po_Se_Con2_Card{
   width:100%;
   height:100%;
   padding-top:15px ;
   padding-left:14px ;
   padding-right: 14px;
   box-sizing: border-box;

 }
  .Ma_Po_Se_Con2_Card_Btn{
    width:100%;
    display: flex;
    padding-bottom: 10px;
  }
  .Ma_Po_Se_Con2_Card_Btn_left{
    width:100%;
    display:flex ;
    justify-content: flex-start;
    align-items: center;
  }
  .Ma_Po_Se_Con2_Card_Btn_right{
    width:100%;
    display:flex ;
    justify-content: flex-end;
    align-items: center;
  }
  .Ma_Po_Se_Con2_Card_Btn_left_lists{
    display: flex;
  }
  .Ma_Po_Se_Con2_Card_Btn_left_lists_single{
    width:58px;
    height:30px;
    font-size: 12px;
    display: flex;
    justify-content: center;
  }
   el-icon-caret-bottom{
    margin:0;
    padding:0;
  }
.Ma_Po_Se_Con2_Card_Btn_right_lists_single{
  display: flex;
  align-items: center;
  height:30px;
  font-size: 16px;
  color:#676a6c;
  border:1px solid #c2c2c2;

}
.Ma_Po_Se_Con2_Card_Btn_right_lists_single:hover{
  background: #d4d4d4;
  color:#fff;
}
  .Ma_Po_Se_Con2_Card_Table{
    width:100%;
    box-sizing: border-box;
  }
  .Ma_Po_Se_Con2_Card_Sum{
    width:100%;
    padding-top:15px;
    padding-bottom: 50px;
  }
  .Ma_Po_Se_Con2_Card_Text{
    font-size: 14px;
    color:#676a6c;
  }
</style>
