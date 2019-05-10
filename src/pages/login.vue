<template>
  <div class="login">
      <div class="loginBox" >
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
          <el-checkbox v-model="checked" class="remember">记住密码</el-checkbox>
          <span class="forget">忘记密码？</span>
        </div>
        <el-button type="primary" class="z loginBtn" @click="login">登&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
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
            checked:false
          }
        },
      methods:{
        login(){
          if(this.userName === '' || this.userPass === ''){
            alert("账号或密码不能为空")
          }else{
            let keyname = 'userName'
            let keypass = 'userPass'
            localStorage.setItem(keyname,this.userName)
            localStorage.setItem(keypass,this.userPass)
            this.$router.push('/')
          }
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
    width: 450px;
    height: 400px;
    border-radius:10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 30px;
    box-shadow: 3px 3px 20px rgba(0,0,0,1);
  }
  .loginBox h1{
    color: #000;
    font-size: 28px;
    opacity: .7;
    margin-bottom: 20px;
  }
  .inp{
    width: 85%;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  .inp label{
    width: 100px;
    color: #000;
    font-size: 18px;
  }
  .bg{
    width: 100%;
    height: 100%;
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
    width: 85%;
    margin: 30px auto 0;
    font-size: 18px;
    font-weight: 900;
  }
  .checkBtn{
    width: 85%;
    display: flex;
    justify-content: space-between;
  }
  .checkBtn input{
    width: 20px;
    height: 20px;
    border-color: #8c8c8c;
    margin-right: 5px;
    background-color: transparent;
    outline: none;
  }
  .remember,.forget{
    color: #000;
  }
</style>
