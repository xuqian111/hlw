<template>
  <div class="tableBox">
    <el-table :data="tableData" style="width: 100%" height="250" class="tab">
      <el-table-column fixed width="60px" text-align="center">
        <input type="checkBox">
      </el-table-column>
      <el-table-column fixed prop="reId" label="编号" width="60px"></el-table-column>
      <el-table-column prop="reName" label="姓名"></el-table-column>
      <el-table-column prop="rePhone" label="电话"></el-table-column>
      <el-table-column prop="reEmail" label="邮箱"></el-table-column>
      <el-table-column prop="reAddress" label="现居地"></el-table-column>
      <el-table-column prop="reDitch" label="渠道"></el-table-column>
      <el-table-column prop="reType" label="任职类型"></el-table-column>
      <el-table-column prop="reInter" label="面试"></el-table-column>
      <el-table-column prop="rePerson" label="面试人"></el-table-column>
      <el-table-column label="操作">
        <el-button size="mini" type="primary">编辑</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "cbRecruitTable",
  data() {
    return {
      tableData: [
        {
          isChecked: true,
          reId: "01",
          reName: "刘瑞雪",
          rePhone: "18817334402",
          reEmail: "liuruixue@163.com",
          reAddress: "上海",
          reDitch: "投递",
          reType: "项目经理",
          reInter: "初始",
          rePerson: "王菁"
        },
        {
          isChecked: true,
          reId: "01",
          reName: "刘瑞雪",
          rePhone: "18817334402",
          reEmail: "liuruixue@163.com",
          reAddress: "上海",
          reDitch: "投递",
          reType: "项目经理",
          reInter: "初始",
          rePerson: "王菁"
        },
        {
          isChecked: true,
          reId: "01",
          reName: "刘瑞雪",
          rePhone: "18817334402",
          reEmail: "liuruixue@163.com",
          reAddress: "上海",
          reDitch: "投递",
          reType: "项目经理",
          reInter: "初始",
          rePerson: "王菁"
        }
      ]
    };
  }
};
</script>

<style scoped>
.tableBox {
  width: calc(100% - 30px);
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}
.tab {
  text-align: center;
}
</style>
