<template>
  <div class="login">
      <div class="loginBox">
        <h1 class="z">LOGIN IN</h1>
        <div class="inp z">
          <label>用户名：</label>
          <el-input class="inputBox" v-model="userName" placeholder="请输入用户名"></el-input>
        </div>
        <div class="inp z">
          <label>密&nbsp;&nbsp;&nbsp;码：</label>
          <el-input class="inputBox" v-model="userPass" placeholder="请输入密码"></el-input>
        </div>
        <div class="z checkBtn">
          <el-checkbox label="记住我" :checked="isChecked" ></el-checkbox>
        </div>
        <el-button type="primary" class="z loginBtn">登录</el-button>
        <div class="bg"></div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "login",
        data(){
          return{
            userName:'',
            userPass:'',
            isChecked:true
          }
        }
    }
</script>

<style scoped>
  .login{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background: url("../../static/img/login.jpg");
    background-size:100% 100%;
    align-items: center;
    z-index: -1;
  }
  .loginBox{
    position: relative;
    width: 320px;
    height: 340px;
    border-radius:10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .loginBox h1{
    color: #000;
    font-size: 24px;
    opacity: .7;
    margin-bottom: 20px;
  }
  .inp{
    display: flex;
    align-items: center;
    margin-top: 30px;
  }
  label{
    width: 80px;
    color: #000;
  }
  .bg{
    width: 320px;
    height: 340px;
    border-radius:10px;
    background: #fff;
    opacity: .5;
    position: absolute;
    left: 0;
    top: 0;
  }
  .z{
    z-index: 5;
  }
  .loginBtn{
    width: 80%;
    margin: 30px auto 0;
  }
  .checkBtn{
    align-self: flex-end;
    margin-right: 20px;
    margin-top: 15px;
  }
</style>
