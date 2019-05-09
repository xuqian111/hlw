<template>
  <div class="breadBrumb">
    <div class="preBtn">
      <span class="el-icon-d-arrow-left"></span>
    </div>
    <div class="brumblist">
      <a href v-for="(item,index) in list" :key="index">
        {{ item }}
        <span class="el-icon-close"></span>
      </a>
    </div>
    <div class="comb">
      <div class="nextBtn">
        <span class="el-icon-d-arrow-right"></span>
      </div>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          下拉菜单
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>关闭当前</el-dropdown-item>
          <el-dropdown-item>关闭其他</el-dropdown-item>
          <el-dropdown-item>全部关闭</el-dropdown-item>
          <el-dropdown-item>全屏显示</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button>刷新</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "cbBreadBrumb",
  data() {
    return {
      list: this.$store.getters.getbrumbs
    };
  }
};
</script>

<style lang="scss" scoped>
.breadBrumb {
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e7eaec;
  height: 40px;
  .preBtn,
  .nextBtn {
    width: 40px;
    text-align: center;
    line-height: 40px;
    padding: 1px 6px;
    border-right: solid 1px #eee;
    span {
      font-size: 25px;
      position: relative;
      top: 4px;
    }
  }
  .brumblist {
    height: 100%;
    flex: 1;
    display: flex;
    flex-wrap: nowrap;
    border-right: solid 1px #eee;
    overflow: hidden;
    a {
      flex-shrink: 0;
      height: 100%;
      line-height: 40px;
      border-right: solid 1px #eee;
      padding: 0 15px;
      span {
        border-radius: 50%;
        background: gray;
      }
    }
  }
  .comb {
    display: flex;
    .el-dropdown {
      line-height: 45px;
    }
    .el-button {
      border: 0;
      border-radius: 0;
      border-left: 1px solid #eee;
    }
  }
}
.el-dropdown-menu {
  .el-dropdown-menu__item {
    text-align: center;
  }
}
</style>

