<template>
  <div class="nav">
    <div class="userMenu">
      <div class="userImg">
        <img src="../assets/img/user.jpg" alt>
      </div>
      <div class="userInfo">
        <div class="userName">大娃</div>
        <div class="userState">
          <div class="online">
            <i class="onlineIcon"></i>
            <span>在线</span>
          </div>
          <div class="outline">
            <i class="el-icon-s-unfold"></i>
            <span>注销</span>
          </div>
        </div>
      </div>
    </div>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          text-color="#fff"
          background-color="#2f4050"
        >
          <el-menu-item index="1">
            <i class="el-icon-document"></i>
            <span slot="title">个人信息</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <router-link to="user">用户</router-link>
              </el-menu-item>
              <el-menu-item index="2-2">
                <router-link to="role">角色</router-link>
              </el-menu-item>
              <el-menu-item index="2-3">
                <router-link to="part">部门</router-link>
              </el-menu-item>
              <el-menu-item index="2-4">
                <router-link to="job">岗位</router-link>
              </el-menu-item>
              <el-menu-item index="2-5">
                <router-link to="schedule">日程</router-link>
              </el-menu-item>
              <el-menu-item index="2-5">
                <router-link to="application">招聘管理</router-link>
              </el-menu-item>
              <el-menu-item index="2-5">
                <router-link to="word">字典管理</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">员工自助查询</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">待定</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "cbNav",
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.onlineIcon {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #1c84c6;
}
.nav {
  background: #2f4050;
  width: 220px;
  .userMenu {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    box-sizing: border-box;

    .userImg {
      img {
        width: 45px;
        height: 45px;
        margin-left: 10px;
        margin-top: 6px;
        border-radius: 50%;
      }
    }
    .userInfo {
      flex: 1;
      padding-left: 10px;
      .userName {
        height: 30%;
        padding-top: 5px;
        padding-bottom: 5px;
      }
      .userState {
        display: flex;
        .online {
          margin-right: 10px;
        }
        .outline {
          &:hover {
            cursor: pointer;
          }
          .el-icon-s-unfold {
            color: #ed4f5a;
          }
        }
      }
    }
  }
  .tac {
    .el-col-12 {
      width: 100%;
      .el-menu {
        border: 0;
        .el-menu-item {
          a {
            display: block;
            width: 100%;
          }
        }
      }
      li {
        background: #2f4050;
        div {
          background: #2f4050 !important;
        }
      }
    }
  }
}
</style>

