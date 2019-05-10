<template>
  <ul class="Ma_Po_Se_Con1">
    <li>
      <span class="Ma_Po_Se_Con1_num">岗位编码：</span>
      <input type="text" class="Ma_Po_Se_Con1_input Ma_Po_Se_Con1_inputnum">
    </li>
    <li>
      <span class="Ma_Po_Se_Con1_num">岗位编码：</span>
      <input type="text" class="Ma_Po_Se_Con1_input Ma_Po_Se_Con1_inputnum">
    </li>
    <li>
      <span class="Ma_Po_Se_Con1_num">岗位编码：</span>
      <input type="text" class="Ma_Po_Se_Con1_input Ma_Po_Se_Con1_inputnum">
    </li>
    <div class="Ma_Po_Se_Con1_Btn">
      <el-row id="Ma_Po_Se_Con1_Btn_Con">
            <el-button type="success" round icon="el-icon-search" class="Ma_Po_Se_Con1_Btn_Search">搜索</el-button>
            <el-button type="warning" round icon="el-icon-refresh" class="Ma_Po_Se_Con1_Btn_Reset">重置</el-button>
      </el-row>
    </div>
  </ul>
</template>

<script>
    export default {
        name: "Managerial_Position_Con1"

    }
</script>

<style scoped>
 .Ma_Po_Se_Con1{
   width:100%;
   display: flex;
   border-radius: 6px;
   border :1px solid #ececed;
   box-sizing: border-box;
   background: #ffffff;
   box-shadow: 2px 1px 3px 0.5px #e1e1e2;
 }
 .Ma_Po_Se_Con1 li{
   width:26%;
   display: flex;
   align-items: center;
   padding-left:15px;
   padding-top:10px;
   padding-bottom:18px;
 }
  .Ma_Po_Se_Con1_num{
    white-space: nowrap;
    font-size:13px;
    color: #333
  }
  .Ma_Po_Se_Con1_input{
    width:200px;
    height:30px;
    outline: none;
   padding-left: 5px;
    border:1px solid #dddddd;
    border-radius: 3px;
    box-sizing: border-box;
  }
  .Ma_Po_Se_Con1_Btn{
    width:22%;
    padding-left:15px;
    padding-top:10px;
    display: flex;
    padding-bottom: 18px;
  }
  .Ma_Po_Se_Con1_Btn_Search{
    width:60px;
    height:30px;
    display: flex;
    outline: none;
    border: none;
    justify-content: center;
    background-color:#1ab394;
  }
  #Ma_Po_Se_Con1_Btn_Con{
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .Ma_Po_Se_Con1_Btn_Reset{
    width:60px;
    height:30px;
    display: flex;
    outline: none;
    border: none;
    justify-content: center;
    background-color:#f8ac59;
    text-align: center;
  }
</style>
