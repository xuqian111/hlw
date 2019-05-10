<template>
  <div class="indexwrap">
    <cb-header/>
    <div class="contentwrap">
      <cb-nav/>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import cbHeader from "../components/cbHeader";
import cbNav from "../components/cbNav";
// import Managerial_Position  from "./managerial-position-vue/Managerial-Position"

export default {
  name: "index",
  components: {
    cbHeader,
    cbNav,
    // Managerial_Position
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
      border: 1px solid black;
    }
  }
}
</style>
