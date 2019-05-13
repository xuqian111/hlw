<template>
  <div class="user">
    <div class="user_wrap">
      <div class="user_left" v-show="isTrue">
        <div class="user_left_top">
          <p>组织机构</p>
          <div class="top_rig">
            <i class="el-icon-s-custom"></i>
            <i class="el-icon-arrow-down"></i>
            <i class="el-icon-refresh"></i>
          </div>
        </div>
        <div class="user_left_center">
            <div class="user_left_cen_c">
              <div class="tree">
                <li class="tree_one">
                    <span class="controlAll"></span>
                    <a href="#"><i class="el-icon-folder-opened"></i><span>若依科技</span></a>
                </li>
                <ul class="tree_two">
                  <li class="tree_one tree_two_a">
                    <div class="Line line1">
                      <span class="control"></span>
                      <a href="#"><i class="el-icon-folder-opened"></i><span>深圳总公司</span></a>
                    </div>
                    <span class="a"></span>
                    <ul class="sz">
                      <li class="tree_three">
                        <div class="Line">
                          <span></span>
                          <a href="#"><i class="el-icon-document"></i><span>研发部门</span></a>
                        </div>
                        <span class="a"></span>
                      </li>
                      <li class="tree_three four">
                        <div class="Line">
                          <span></span>
                          <a href="#"><i class="el-icon-document"></i><span>市场部门</span></a>
                        </div>
                        <span class="a"></span>
                      </li>
                      <li class="tree_three four">
                        <div class="Line">
                          <span></span>
                          <a href="#"><i class="el-icon-document"></i><span>测试部门</span></a>
                        </div>
                        <span class="a"></span>
                      </li>
                      <li class="tree_three four">
                        <div class="Line">
                          <span></span>
                          <a href="#"><i class="el-icon-document"></i><span>财务部门</span></a>
                        </div>
                        <span class="a"></span>
                      </li>
                      <li class="tree_three four">
                        <div class="Line">
                          <span></span>
                          <a href="#"><i class="el-icon-document"></i><span>运维部门</span></a>
                        </div>
                        <span class="a"></span>
                      </li>
                    </ul>
                  </li>
                  <li class="tree_one tree_two_a">
                    <div class="Line line1">
                      <span class="control"></span>
                      <a href="#"><i class="el-icon-folder-opened"></i><span>长沙总公司</span></a>
                    </div>
                    <ul class="langLine">
                      <li class="tree_three">
                        <div class="Line">
                          <span></span>
                          <a href="#"><i class="el-icon-document"></i><span>市场部门</span></a>
                        </div>
                      </li>
                      <li class="tree_three four">
                        <div class="Line">
                          <span></span>
                          <a href="#"><i class="el-icon-document"></i><span>财务部门</span></a>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
      <div class="user_right">
        <div class="user_right-wrap">
          <div class="user_right_top">
            <ul class="user_top_r">
              <li>
                <p>登录名称:</p>
                <input type="text">
              </li>
              <li>
                <p>手机号码:</p>
                <input type="text">
              </li>
              <li>
                <p>用户状态:</p>
                <select name="" id="">
                  <option value="">所有</option>
                  <option value="">正常</option>
                  <option value="">停用</option>
                </select>
              </li>
              <li class="time">
                <div class="four">
                  <p>创建日期:</p>
                  <div class="block timeBox">
                    <el-date-picker
                      class="data"
                      v-model="value3"
                      type="date"
                      placeholder="开始时间">
                    </el-date-picker>
                  </div>
                  -
                  <div class="block timeBox">
                    <el-date-picker
                      class="data"
                      v-model="value4"
                      type="date"
                      placeholder="结束时间">
                    </el-date-picker>
                  </div>
                </div>
              </li>
              <li>
                <el-button type="primary" round>搜索</el-button>
                <el-button type="danger" round>重置</el-button>
              </li>

            </ul>
          </div>
          <div class="user_right_cent">
            <div class="user_right_cent_top">
              <div class="user_right_cent_left">
                <el-button class="btn" size="mini"><i class="el-icon-plus"></i><router-link to="userManagementWrite">新增</router-link></el-button>
                <el-button class="btn" size="mini"><i class="el-icon-edit-outline"></i><router-link to="userManagementWrite">修改</router-link></el-button>
                <el-button class="btn" size="mini"><i class="el-icon-delete"></i>删除</el-button>
                <el-button class="btn" size="mini"><i class="el-icon-plus"></i>导入</el-button>
                <el-button class="btn" size="mini"><i class="el-icon-plus"></i>导出</el-button>
              </div>
              <div class="user_right_cent_right">
                <el-button class="btn01" size="mini"><i class="el-icon-search"></i></el-button>
                <el-button class="btn01" size="mini"><i class="el-icon-refresh"></i></el-button>
                <el-button class="btn01" size="mini"><i class="el-icon-set-up"></i></el-button>
              </div>
            </div>
            <div class="user_right_cent_cen">
              <el-table
                ref="multipleTable"
                :header-cell-style="{background:'#eff3f8'}"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
              >
                <el-table-column
                  type="selection"
                  width="40">
                </el-table-column>
                <el-table-column
                  label="用户ID"
                  sortable
                  width="90">
                  <template slot-scope="scope">{{ scope.row.id }}</template>
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="登录名称"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="username"
                  label="用户名称"
                  width="70"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  prop="department"
                  label="部门"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="tel"
                  label="手机"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="userState"
                  label="用户状态"
                  width="80">
                  <template slot-scope="scope">
                    <el-switch
                      v-model="scope.row.status"
                      :active-value= true
                      :inactive-value= false
                      active-color="#13ce66"
                      inactive-color="#eee">
                    </el-switch>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="data"
                  label="创建时间"
                  sortable
                  width="110">
                </el-table-column>
                <el-table-column
                  prop="operation"
                  label="操作"
                  width="155">
                  <template>
                    <div class="rigBtn">
                      <el-button size="mini"><i class="el-icon-edit-outline"></i><router-link to="userManagementWrite">编辑</router-link></el-button>
                      <el-button @click="open" size="mini"><i class="el-icon-delete"></i>删除</el-button>
                      <el-button size="mini"><i class="el-icon-key"></i>重置</el-button>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <div class="user_right_cent_bot">
              <p>第 <span>1</span> 到 <span>2</span>,</p>
              <p>共 <span>2</span> 条记录。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="rightLine" ref="s">
        <div @click="showLeft" class="rightLineC">
          <i class="el-icon-caret-left"></i>
        </div>
      </div>
    </div>
    <!--<usermanagement-write/>-->
  </div>
</template>

<script>
  import userManagementWrite from '../cbManagement/userManagementWrite'
    export default {
        name: "userManagement",
        components:{
          usermanagementWrite:userManagementWrite
        },
      data() {
        return {
          pickerOptions: {
            disabledDate(time) {
              return time.getTime() > Date.now();
            }
          },
          tableData: [{
            id: '1',
            name: 'admin',
            username:'若依',
            department:'研发部门',
            tel:'15811111111',
            data:'2018-1-1'
          }, {
            id: '2',
            name: 'admin',
            username:'若依',
            department:'研发部门',
            tel:'15811111111',
            data:'2018-1-1'
          }],
          value1:true,
          value2:true,
          value3:'',
          value4:'',
          isTrue:'true'
        };
      },
      methods:{
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
        showLeft(){
          if (this.isTrue) {
            this.isTrue = !this.isTrue
            this.$refs.s.style.left = 0
          }else {
            this.isTrue = !this.isTrue
            this.$refs.s.style.left = '17%'
          }

        }
      },
      mounted(){
          // jquery实现左边树状结构
          $('.controlAll').click(function () {
            if ($('.tree_two').css('display')!='none'){
              $(this).css('backgroundPosition','-126px 0')
              $('.tree_two').css('display','none')
              $(this).next().children().eq(0).attr('class','el-icon-folder')
            }else {
              $('.tree_two').css('display','block')
              $(this).css('backgroundPosition','-105px 0')
              $(this).next().children().eq(0).attr('class','el-icon-folder-opened')

            }
          })
          $('.control').click(function () {
          let isTrue = $(this).parent().nextAll('ul').css('display')
          if (isTrue!='none') {
            $(this).parent().nextAll('ul').css('display','none')
            $(this).css('backgroundPosition','-127px -3px')
            $(this).next().children().eq(0).attr('class','el-icon-folder')
          }else {
            $(this).parent().nextAll('ul').css('display','block')
            $(this).css('backgroundPosition','-106px -3px')
            $(this).next().children().eq(0).attr('class','el-icon-folder-opened')

          }
        })
      }
    }
</script>

<style scoped>
  /*左边树形结构*/
  .a{
    width: 10px;
    height: 20px;
    position: absolute;
    background: url("../../../static/metro.png") no-repeat -85px -20px;
  }
  .user_left_center{
    width: 100%;
  }
  .user_left_cen_c{
    width: 100%;
    margin-top: 5%;
  }
  .tree_one{
    margin-left: 10%;
    align-items: center;
    vertical-align: center;
  }
  .tree_one span{
    display: inline-block;
  }
  .tree_one span:nth-child(1){
    width: 17px;
    height: 17px;
    margin-right: 3px;
    background: url("../../../static/metro.png") no-repeat -105px 0;
    cursor: pointer;
  }
  .tree_one a{
    color: #000;
    font-size: 13px;
  }
  .tree_one a span{
    color: #000;
    margin-left: 5px;
  }
  .tree_two{
    margin-left: 11%;
  }
  .tree_two li{
    width: 90%;
  }
  .tree_two_a span:nth-child(1){
    height: 21px;
    width: 21px;
    background-position: -106px -3px;
    transform: rotateX(180deg);
  }
  .tree_three .Line{
    margin-left: 15%;
  }
  .tree_three .Line span:nth-child(1){
    background-position: -87px -20px;
  }
  .four .Line span:nth-child(1){
    background-position: -87px -20px;
  }
  .four:last-of-type .Line span:nth-child(1){
    background-position: -87px 0;
  }
  .Line{
    display: flex;
    align-items: center;
  }
  .line1{
    padding-left: 0;
  }
  /*树桩样式结尾*/

  .user{
    width: 100%;
    height: 100%;
    background-color: #eeeeee;
  }
.user_wrap{
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
  display: flex;
  position: relative;
}
  .user_left{
    width: 17%;
    height: 100%;
    background-color: white;
  }
  .user_left_top{
    height: 32px;
    padding: 12px 10px 2px 15px;
    border-bottom: 1px solid #eee;
    display: flex;
  }
  .user_left_top p{
    font-size: 16px;
    margin-right: 15%;
    color: #676a6c;
  }
  .top_rig i:hover{
    color: #606c84;
    cursor: pointer;
  }
  /*左边竖线*/
  .rightLine{
    width: 8px;
    height: 100%;
    position: absolute;
    background-color: #fafafa;
    top: 0;
    left:17%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .rightLineC{
    width: 100%;
    height: 50px;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #666;
  }
  .rightLineC:hover{
    background-color: #FC6;
    cursor: pointer;
  }
  /*右边*/
  .user_right{
    width: 82%;
    height: 100%;
    margin: 0 auto;
  }
  .user_right-wrap{
    width: 98%;
    height: 100%;
    margin: 0 auto;
    /*background-color: red;*/
  }
  .user_right_top{
    background-color: white;
    border-radius: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .user_top_r{
    display: flex;
    flex-wrap: wrap;
  }
  .user_top_r li{
    display: flex;
    align-items: center;
    margin: 10px;
  }
.user_top_r li p{
  font-size: 13px;
  margin-right: 5px;
  color: #000;
}
  .user_top_r li input{
    width: 200px;
    height: 30px;
    border: 1px solid #eeeeee;
    border-radius: 5px;
  }
.user_top_r li select{
  width: 200px;
  height: 30px;
  border: 1px solid #eeeeee;
  border-radius: 5px;
}
.four{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.four p{
  width: 56px;
}
.block{
  width: 100%;
}
  .data{
    width: 100%;
    height: 26px;
  }
  .data input{
    width: 100%;
    padding: 0!important;
  }
  .timeBox{
    width: 39%;
  }
  .time{
    width: 40%;
  }
/*中右*/
.user_right_cent_top{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user_right_cent_left{
  margin:10px;
}
.user_right_cent_left a{
  color: white;
}
.user_right_cent{
  width: 100%;
  height: 75%;
  overflow-y: auto;
  background-color: white;
}
.btn:nth-child(1){
  background-color: #1c84c6;
  border-color: #1c84c6;
}
.btn:nth-child(2){
  background-color: #1dc5a3;
  border-color: #1dc5a3;
}
.btn:nth-child(3){
  background-color: #ef6776;
  border-color: #ef6776;
}
.btn:nth-child(4){
  background-color: #23c6c8;
  border-color: #23c6c8;
}
.btn:nth-child(5){
  background-color: #f8ac59;
  border-color: #f8ac59;
}
  .btn{
    margin: 0;
    padding: 5px 10px;
    color: white;
    font-size: 12px;
  }
  .user_right_cent_right{
    margin: 10px;
  }
  .btn01{
    height: 28px;
    margin: 0;
    float: left;
    border-radius:0px;
    font-size: 14px;
    background-color: white;
    border-color: #c2c2c2;
  }
.btn01:hover{
  background-color: #c2c2c2;
}
  .user_right_cent_cen{
    width: 98%;
    background-color: #0bae6e;
    margin: 0 auto;
  }
  .rigBtn{
    display: flex;
  }
  .rigBtn a{
    color: white;
  }
  .rigBtn button{
    font-size: 12px;
    margin: 0;
    padding: 5px 4px;
    margin-right: 2px;
  }
  .rigBtn button:nth-child(1){
    background-color: #1c84c6;
    color: white;
  }
  .rigBtn button:nth-child(2){
    background-color: #ed5565;
    color: white;
  }
  .rigBtn button:nth-child(3){
    background-color: #23c6c8;
    color: white;
  }
  .user_right_cent_bot{
    width: 98%;
    margin: 0 auto;
    display: flex;
    margin-top: 5px;
  }
  .user_right_cent_bot p,span{
    color: #676a6c;
  }
</style>
