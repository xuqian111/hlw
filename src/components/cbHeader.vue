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
      <el-menu-item index="3">全屏显示</el-menu-item>
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
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
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
}
</style>
