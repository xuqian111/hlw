<template>
  <div class="indexwrap">
    <cb-header/>
    <div class="contentwrap">
      <cb-nav/>
      <div class="content">
        <cbbreadCrumb/>
        <div class="main">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cbHeader from "../components/cbHeader";
import cbNav from "../components/cbNav";
import cbbreadCrumb from "../components/cbbreadCrumb";
export default {
  name: "Index",
  components: {
    cbHeader,
    cbNav,
    cbbreadCrumb
  }
};
</script>

<style lang="scss" scoped>
.indexwrap {
  height: calc(100% - 60px);
  .contentwrap {
    height: 100%;
    display: flex;
    justify-content: space-between;
    .content {
      flex: 1;
      background: #e2e2e2;
      .main {
        margin-top: 30px;
      }
    }
  }
}
</style>
