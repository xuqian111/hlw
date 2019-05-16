<template>
  <div class="Write_wrap">
    <div class="Write_top">
      <div class="basic">
        <div class="basic_top">
          <p>基本信息</p>
        </div>
        <div class="basic_cen">
            <div class="basic_cen_left">
              <div class="basic_cen_left_wrap">
                <p><span>用户名称：</span><input type="text" v-model="tableData.userName" placeholder="请输入用户名"></p>
                <p><span>手机号码：</span><input type="text" v-model="tableData.tel" placeholder="请输入手机号"></p>
                <p><span>登录账号：</span><input type="text" disabled="true" placeholder="请输入用户名"></p>
                <p>
                  <span>岗位：</span>
                  <el-select class="gw" v-model="value5" multiple placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </p>
                <p>
                    <span>角色：</span>
                  <template>
                    <el-radio  @change="sourceFilter" name="1"  v-model="tableData.权限" label="管理员">管理员</el-radio>
                    <el-radio  @change="sourceFilter" name="1" v-model="tableData.权限" label="pro">普通员工</el-radio>
                  </template>
                </p>
              </div>
            </div>
          <div class="basic_cen_left">
            <div class="basic_cen_left_wrap basic_cen_rig_wrap">
              <p><span>归属部门：</span><input type="text" v-model="tableData.part" placeholder="请输入部门"><span class="icons"><i class="el-icon-search"></i></span></p>
              <p><span>邮箱：</span><input type="text" v-model="tableData.email" placeholder="请输入邮箱"></p>
              <p><span>用户状态：</span>
                <el-switch
                  v-model="value2"
                  active-color="#13ce66"
                  inactive-color="#eee">
                </el-switch>
              </p>
              <p>
                <span>性别：</span>
                <select v-model="tableData.sex">
                  <option value="男">男</option>
                  <option value="女">女</option>
                </select>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="rest">
        <div class="basic_top">
          <p>其他信息</p>
        </div>
        <div class="rest_cen">
          <div class="rest_cen_wrap">
            <div class="rest_cen_t">
              <p>备注：</p>
              <textarea name="" id="" cols="30" rows="10">管理员</textarea>
            </div>
            <div class="rest_cen_c">
              <div class="endBtn">
                <el-button @click="saveData" size="mini"><i class="el-icon-check"></i>保存</el-button>
                <el-button size="mini"><i class="el-icon-receiving"></i>关闭</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="Write_cen"></div>
  </div>
</template>

<script>
    export default {
        name: "userManagementWrite",
      data(){
        return {
          options: [
            {
            value: '选项1',
            label: '董事长'
          }, {
            value: '选项2',
            label: '项目经理'
          }, {
            value: '选项3',
            label: '人力资源'
          }, {
            value: '选项4',
            label: '普通员工'
          }
          ],
          value5: [],
          value11: [],
          value1:true,
          value2:true,
          tableData:''
        }
      },
      methods:{
        sourceFilter(){
          console.log(this.tableData.权限)
        },
          saveData(){
            console.log(this.checked)
            fetch('http://10.35.164.14:3000/user/api/editUser', {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              body:`userId=${this.tableData.userId}&userPass=${this.tableData.userId}&sex=${this.tableData.sex}&userName=${this.tableData.userName}&email=${this.tableData.email}&part=${this.tableData.part}&job=${this.tableData.job}&state=${this.tableData.state}&权限=${this.tableData.权限}`
            }).then(res => {
              console.log('res', res)
              res.json().then(data => {
                this.$router.push("/index/customer");
                console.log('data2', data)
              })
            })
          }
      },
      created() {
        $.get("http://10.35.164.14:3000/user/api/getUser", data => {
          // this.tableData = data;
          let Cindex = this.$store.state.num
          data.forEach((item,index)=>{
              if (index==Cindex){
                this.tableData = item
              }
          })
          console.log(this.tableData)
        });
      },
    }
</script>

<style scoped>
  .Write_wrap{
    width: 95%;
    height: 100%;
    margin: 0 auto;
  }
  .basic_top{
    padding-top: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid #ddd;
  }
  .basic_top p{
    color: #6379bb;
    font-size: 15px;
  }
  .basic_cen{
    width: 100%;
    margin-top: 25px;
    display: flex;
  }
  .basic_cen_left{
    width: 50%;
  }
  .basic_cen_left_wrap{
    margin-left: 5%;
  }
  .basic_cen_left_wrap p{
    margin-bottom: 15px;
    align-items: center;
    display: flex;
  }
  .basic_cen_left_wrap span{
    width: 15%;
    text-align: right;
    color: #000;
    font-size: 13px;
    margin-right: 10%;
  }
  .basic_cen_left_wrap input{
    padding: 10px;
    border:1px solid #e5e6e7;
    border-radius: 5px;
  }
  .gw{
    padding: 0;
    width: 190px;
  }
  .basic_cen_rig_wrap .icons{
    text-align: center;
    line-height: 35px;
    height: 35px;
    border:1px solid #e5e6e7;;
    width: 7%;
  }
  .basic_cen_rig_wrap input{
      border-radius: 0;
  }
  .basic_cen_rig_wrap select{
    width: 46%;
    padding: 5px 0;
  }
  .basic_cen_rig_wrap select option{
    height: 37px;
  }
  /*其他信息*/
  .rest_cen{
    width: 100%;
  }
  .rest_cen_wrap{
    width: 95%;
    margin:0 auto;
  }
  .rest_cen_t{
    display: flex;
    margin-top: 25px;
  }
  .rest_cen_t p{
    color: #000;
    margin-right: 3%;
  }
  .rest_cen_t textarea{
    width:90%;
    padding: 5px;
    height: 80px;
    border:1px solid #e5e5e5;
  }
  .rest_cen_c{
    width: 100%;
    margin:0 auto;
    display: flex;
    justify-content: center;
  }
  .rest_cen_c button:nth-of-type(1){
    background-color:#18a689;
    color: white;
  }
  .rest_cen_c button:nth-of-type(2){
    background-color:#ec4758;
    color: white;
  }
  .endBtn{
    margin-top: 20px;
  }
</style>
