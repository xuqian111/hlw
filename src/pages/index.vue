<template>
  <div class="indexwrap">
    <cb-header/>
    <div class="contentwrap">
      <cb-nav/>
      <div class="content">
        <cbbreadCrumb/>
        <div class="main">
          <transition name="fade" mode="out-in">
            <router-view/>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cbHeader from "../components/cbHeader";
import cbNav from "../components/cbNav";
import cbbreadCrumb from "../components/cbbreadCrumb";
// import Managerial_Position  from "./managerial-position-vue/Managerial-Position"

export default {
  name: "Index",
  components: {
    cbHeader,
    cbNav,
    cbbreadCrumb
    // Managerial_Position
  }
};
</script>

<style lang="scss" scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.1s;
}
.indexwrap {
  height: calc(100% - 60px);
  .contentwrap {
    height: 100%;
    display: flex;
    justify-content: space-between;
    .content {
      width: calc(100% - 220px);
      flex: 1;
      .main {
        margin-top: 30px;
        height: calc(100% - 71px);
        overflow-y: auto;
        &::-webkit-scrollbar {
          width: 5px; /*对垂直流动条有效*/
          height: 5px; /*对水平流动条有效*/
        }
        /*定义滚动条的轨道颜色、内阴影及圆角*/
        &::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 6px rgba(233, 220, 220, 0.3);
          border-radius: 3px;
        }
        /*定义滑块颜色、内阴影及圆角*/
        &::-webkit-scrollbar-thumb {
          border-radius: 7px;
          -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          background-color: #e8e8e8;
        }
      }
    }
  }
}
</style>
