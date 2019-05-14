<template>
  <div class="RsearchBox">
    <label>ID号：</label>
    <el-input class="inputBox" v-model="address" placeholder="请输入内容"></el-input>
    <label>姓名：</label>
    <el-input class="inputBox" v-model="Name" placeholder="请输入内容"></el-input>
    <label>电话：</label>
    <el-input class="inputBox" v-model="Phone" placeholder="请输入内容"></el-input>
    <label>任职类型：</label>
    <el-select class="inputBox" clearable v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-button type="success" round class="searchBtn" @click="search(address,Name,Phone)" native>搜索</el-button>
    <el-button type="warning" round @click="reset">重置</el-button>

  </div>
</template>

<script>
    export default {
        name: "cbRecruitSearchBox",
        data(){
          return{
            address:'',
            Name:'',
            Phone:'',
            options: [
              {
              value: '选项1',
              label: '人事'
            }, {
              value: '选项2',
              label: '项目经理'
            }, {
              value: '选项3',
              label: '客服'
            }, {
              value: '选项4',
              label: '销售'
            }],
            value: ''

          }
        },
        methods:{
          reset(){
            this.Id = this.Name = this.Phone = '';
            this.$emit('parentReset')
          },
          search(address,Name,Phone){
            // console.log(Id,Name,Phone)
            this.$emit('parentClick',{address,Name,Phone});
            // this.reId = this.reName = this.rePhone = ''
          }
        }
    }
</script>

<style scoped leng="scss">

.RsearchBox{
  width: calc(100% - 20px);
  height: 40px;
  border-radius: 5px;
  font-size: 14px;
  color: #141414;
  background: #fff;
  padding: 10px 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  box-shadow: 1px 1px 3px rgba(0,0,0,.2);
}
  .inputBox{
    margin-right: 10px;
    width: 15%;
  }
  label{
    white-space: nowrap;
  }
  /*.searchBtn{*/
    /*background-color: #18a689;*/
    /*border-color:#18a689;*/
  /*}*/
</style>
