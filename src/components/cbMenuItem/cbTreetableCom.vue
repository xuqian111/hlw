<template>
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
      label="部门名称"
      show-overflow-tooltip>
      <template slot-scope="scope">&nbsp;&nbsp;{{ scope.row.company }}</template>
    </el-table-column>
    <el-table-column
      prop="sort"
      label="排序"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      label="状态"
      show-overflow-tooltip>
        <el-button size="mini" type="success" round>正常</el-button>
    </el-table-column>
    <el-table-column
      prop="date"
      label="创建时间"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column label="操作">
      <template>
        <cbDialog/>
        <el-button
          size="mini"
          type="danger"
          @click="open">删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import cbDialog from "./cbDialog";
  export default {
    components: {
        cbDialog,
    },
    data() {
      return {
        tableData: [{
          company: '若依科技',
          sort: '0',
          address: '正常',
          date: '2018-03-16 11:33:00',
          operation: ''
        }, {
          company: '深圳总公司',
          sort: '1',
          address: '正常',
          date: '2018-03-16 11:33:00',
          operation: ''
        }, {
          company: ' 研发部门',
          sort: '1',
          address: '正常',
          date: '2018-03-16 11:33:00',
          operation: ''
        }, {
          company: ' 市场部门',
          sort: '2',
          address: '正常',
          date: '2018-03-16 11:33:00',
          operation: ''
        }, {
          company: ' 测试部门',
          sort: '3',
          address: '正常',
          date: '2018-03-16 11:33:00',
          operation: ''
        }, {
          company: ' 财务部门',
          sort: '4',
          address: '正常',
          date: '2018-03-16 11:33:00',
          operation: ''
        }, {
          company: ' 运维部门',
          sort: '5',
          address: '正常',
          date: '2018-03-16 11:33:00',
          operation: ''
        }, {
          company: '长沙分公司',
          sort: '2',
          address: '正常',
          date: '2018-03-16 11:33:00',
          operation: ''
        }, {
          company: ' 市场部门',
          sort: '1',
          address: '正常',
          date: '2018-03-16 11:33:00',
          operation: ''
        }, {
          company: ' 财务部门',
          sort: '2',
          address: '正常',
          date: '2018-03-16 11:33:00',
          operation: ''
        }],
        multipleSelection: [],

        
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      }
    },

    methods: {
         open() {
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
.cell el-tooltip{
}
</style>
