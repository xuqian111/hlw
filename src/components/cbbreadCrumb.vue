<template>
  <div class="breadBrumb">
    <div class="preBtn">
      <span class="el-icon-d-arrow-left"></span>
    </div>
    <div class="brumblist">
      <div v-for="(item,index) in list" :key="index" @click="goRouter(item)">
        {{ item }}
        <span class="el-icon-close" @click.stop="deleteOne(index)"></span>
      </div>
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
      // console.log("n", n);
      this.$store.dispatch({
        type: "untradd",
        data: n
      });

      let nowUrl = this.$store.getters.getbrumbs[
        this.$store.getters.getbrumbs.length - 1
      ];
      // console.log("nowUrl", nowUrl);
      let url = "";
      switch (nowUrl) {
        case "个人中心":
          url = "personal";
          break;
        case "招聘管理":
          url = "recruit";
          break;
        case "角色":
          url = "personal";
          break;
        case "部门":
          url = "recruit";
          break;
        case "岗位":
          url = "job";
          break;
        case "招聘管理":
          url = "recruit";
          break;
      }
      this.$router.push("/index/" + url);
    },
    goRouter(path) {
      let url = "";
      switch (path) {
        case "个人中心":
          url = "personal";
          break;
        case "招聘管理":
          url = "recruit";
          break;
        case "角色":
          url = "role";
          break;
        case "部门":
          url = "recruit";
          break;
        case "岗位":
          url = "job";
          break;
        case "招聘管理":
          url = "recruit";
          break;
      }
      this.$router.push("/index/" + url);
    },
    closeCurrent() {
      let lists = this.$store.getters.getbrumbs;
      let url = "";
      let i = "";
      lists.some((item, index) => {
        switch (item) {
          case "个人中心":
            url = "personal";
            break;
          case "角色":
            url = "role";
            break;
          case "部门":
            url = "part";
            break;
          case "岗位":
            url = "job";
            break;
          case "招聘管理":
            url = "recruit";
            break;
          case "日程":
            url = "schedule";
            break;
          case "字典管理":
            url = "dictionary";
            break;
          default:
            url = "";
            break;
        }
        if (url == window.location.hash.split("/").pop()) {
          i = index;
          return true;
        }
      });
      this.deleteOne(i);
    },
    closeOther() {
      let lists = this.$store.getters.getbrumbs || [];
      let url = "";
      let i = "";
      lists.some((item, index) => {
        console.log("1other", index);
        switch (item) {
          case "个人中心":
            url = "personal";
            break;
          case "角色":
            url = "role";
            break;
          case "部门":
            url = "part";
            break;
          case "岗位":
            url = "job";
            break;
          case "招聘管理":
            url = "recruit";
            break;
          case "日程":
            url = "schedule";
            break;
          case "字典管理":
            url = "dictionary";
            break;
          default:
            url = "";
            break;
        }
        console.log("url", url);
        console.log("arr", window.location.hash.split("/").pop());
        if (url == window.location.hash.split("/").pop()) {
          i = index;
          return true;
        }
      });
      console.log("index", i);
      this.$store.dispatch({
        type: "lastOne",
        data: i
      });
    },
    closeAll() {
      this.$store.dispatch({
        type: "clear"
      });
      this.$router.push("/index");
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
    div {
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

