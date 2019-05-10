<template>
  <div class="breadBrumb">
    <div class="preBtn">
      <span class="el-icon-d-arrow-left"></span>
    </div>
    <div class="brumblist">
      <a href="javascript:;" v-for="(item,index) in list" :key="index" @click="goRouter(item)">
        {{ item }}
        <span class="el-icon-close" @click.prevent="deleteOne(index)"></span>
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
          <el-dropdown-item>
            <span @click="closeCurrent">关闭当前</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <span @click="closeOther">关闭其他</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <span @click="closeAll">全部关闭</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button @click="reload">刷新</el-button>
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
  },
  methods: {
    reload() {
      location.reload();
    },
    deleteOne(n) {
      this.$store.dispatch({
        type: "untradd",
        data: n
      });
    },
    goRouter(path) {
      this.$router.push("/index/" + path);
    },
    closeCurrent() {
      let lists = this.$store.getters.getbrumbs;
      let url = window.location.hash.split("/").pop();
      let i = "";
      lists.some((item, index) => {
        i = index;
        if (item == url) return true;
      });
      this.deleteOne(i);
    },
    closeOther() {},
    closeAll() {
      this.$store.dispatch({
        type: "clear",
        data: ""
      });
      // console.log(this.$store.getters.getbrumbs);
    }
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
  background: #fff;
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
      line-height: 40px;
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

