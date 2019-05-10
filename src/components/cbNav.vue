<template>
  <div class="nav">
    <div class="userMenu">
      <div class="userImg" @click="router('personal','个人中心')">
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
                <span @click="router('customer','用户')">用户</span>
              </el-menu-item>
              <el-menu-item index="2-2">
                <span @click="router('role','角色')">角色</span>
              </el-menu-item>
              <el-menu-item index="2-3">
                <span @click="router('part','部门')">部门</span>
              </el-menu-item>
              <el-menu-item index="2-4">
                <span @click="router('job','岗位')">岗位</span>
              </el-menu-item>
              <el-menu-item index="2-5">
                <span @click="router('schedule','日程')">日程</span>
              </el-menu-item>
              <el-menu-item index="2-6">
                <span @click="router('recruit','招聘管理')">招聘管理</span>
              </el-menu-item>
              <el-menu-item index="2-7">
                <span @click="router('dictionary','字典管理')">字典管理</span>
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
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    router(path, crumb) {
      this.$store.dispatch({
        type: "intradd",
        data: crumb
      });
      this.$router.push("/index/" + path);
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
.nav::-webkit-scrollbar {
  width: 2px; /*对垂直流动条有效*/
  height: 2px; /*对水平流动条有效*/
}
/*定义滚动条的轨道颜色、内阴影及圆角*/
.nav::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
}
/*定义滑块颜色、内阴影及圆角*/
.nav::-webkit-scrollbar-thumb {
  border-radius: 7px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #e8e8e8;
}

.nav {
  background: #2f4050;
  width: 220px;
  overflow-x: hidden;
  overflow-y: auto;
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
          height: 32px;
          line-height: 32px;
          a {
            display: block;
            width: 100%;
          }

          span {
            display: inline-block;
            width: 100%;
            color: #ccc !important;
          }
        }
      }
    }
  }
}
</style>

