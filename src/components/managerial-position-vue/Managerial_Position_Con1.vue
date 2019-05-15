<template>
  <ul class="Ma_Po_Se_Con1" v-if="this.data">
    <el-row :gutter="10">
      <el-col :xs="12" :sm="12" :md="8" :lg="7" :xl="7" style="box-sizing: border-box">
        <div class="grid-content bg-purple grid-content1">
          <span class="Ma_Po_Se_Con1_num">岗位编码：</span>
          <input type="text" class="Ma_Po_Se_Con1_input Ma_Po_Se_Con1_inputnum Ma_Po_Se_Con1_inputnum1">
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="16" :lg="7" :xl="7" style="box-sizing: border-box">
        <div class="grid-content bg-purple-light">
          <span class="Ma_Po_Se_Con1_num">岗位名称：</span>
          <input type="text" class="Ma_Po_Se_Con1_input Ma_Po_Se_Con1_inputnum Ma_Po_Se_Con1_inputnum2">
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="8" :lg="7" :xl="7" style="box-sizing: border-box">
        <div class="grid-content bg-purple">
          <span class="Ma_Po_Se_Con1_num">岗位状态：</span>
          <el-select v-model="value" placeholder="所有">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="16" :lg="3" :xl="3" style="box-sizing: border-box">
        <div class="grid-content bg-purple-light">
          <el-row id="Ma_Po_Se_Con1_Btn_Con">
            <el-button
              type="success"
              round
              icon="el-icon-search"
              class="Ma_Po_Se_Con1_Btn_Search"
            >搜索</el-button>
            <el-button
              type="warning"
              round
              icon="el-icon-refresh"
              class="Ma_Po_Se_Con1_Btn_Reset"
            >重置</el-button>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </ul>
</template>

<script>
export default {
  name: "Managerial_Position_Con1",
  components: {},
  props: ["data"],
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "所有"
        },
        {
          value: "选项2",
          label: "正常"
        },
        {
          value: "选项3",
          label: "停用"
        }
      ],
      value: "",
      user:{
        "coding":"",
        "name":"",
        "status":""
      }
    }
  },


}
</script>

<style scoped>
.Ma_Po_Se_Con1 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-radius: 6px;
  border: 1px solid #ececed;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 2px 1px 3px 0.5px #e1e1e2;
}
.grid-content {
  display: flex;
  padding-top: 10px;
  padding-left: 8px;
  padding-bottom: 18px;
  box-sizing: border-box;
  align-items: center;
}

el-col {
  padding-left: 0;
  padding-right: 0;
}

.Ma_Po_Se_Con1_num {
  white-space: nowrap;
  font-size: 13px;
  color: #333;
}
.Ma_Po_Se_Con1_input {
  width: 200px;
  height: 30px;
  outline: none;
  padding-left: 5px;
  border: 1px solid #dddddd;
  border-radius: 3px;
  box-sizing: border-box;
}
.Ma_Po_Se_Con1_Btn {
  width: 22%;
  padding-left: 15px;
  padding-top: 10px;
  display: flex;
  padding-bottom: 18px;
}
.Ma_Po_Se_Con1_Btn_Search {
  width: 60px;
  height: 30px;
  display: flex;
  outline: none;
  border: none;
  justify-content: center;
  background-color: #1ab394;
}
#Ma_Po_Se_Con1_Btn_Con {
  display: flex;
  justify-content: center;
  text-align: center;
}
.Ma_Po_Se_Con1_Btn_Reset {
  width: 60px;
  height: 30px;
  display: flex;
  outline: none;
  border: none;
  justify-content: center;
  background-color: #f8ac59;
  text-align: center;
}
</style>
