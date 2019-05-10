<template>
  <div class="header">
    <div class="user">Hu lu wa</div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">视频课程</el-menu-item>
      <el-menu-item index="2">开发文档</el-menu-item>
      <el-menu-item index="3" @click="fullScreen" v-if="isFull">
        <i class="el-icon-rank full"></i> 全屏显示
      </el-menu-item>
      <el-menu-item index="3" @click="unFullScreen" v-else-if="!isFull">关闭全屏</el-menu-item>
      <el-menu-item index="4">葫芦娃</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "cbHeader",
  data() {
    return {};
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      isFull: true
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    fullScreen() {
      this.isFull = !this.isFull;
      if (document.documentElement.RequestFullScreen) {
        document.documentElement.RequestFullScreen();
      }
      //兼容火狐
      // console.log(document.documentElement.mozRequestFullScreen);
      if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      }
      //兼容谷歌等可以webkitRequestFullScreen也可以webkitRequestFullscreen
      if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen();
      }
      //兼容IE,只能写msRequestFullscreen
      if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    },
    unFullScreen() {
      this.isFull = !this.isFull;
      if (document.exitFullScreen) {
        document.exitFullscreen();
      }
      //兼容火狐
      // console.log(document.mozExitFullScreen);
      if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      }
      //兼容谷歌等
      if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      //兼容IE
      if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  height: 60px;
  background-color: #3c8dbc;
  display: flex;
  justify-content: space-between;
  .user {
    width: 220px;
    font-size: 20px;
    text-align: center;
    line-height: 60px;
  }
  .el-menu {
    background-color: #3c8dbc !important;
    position: absolute;
    right: 0;
    li {
      background-color: #3c8dbc !important;
    }
  }
  .full {
    transform: translateX(10px) rotateZ(45deg);
    color: #42b0eb;
    font-size: 20px;
  }
}
</style>
