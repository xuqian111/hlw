<template>
  <div class="rightBox">
    <cbRecruitSearchBox></cbRecruitSearchBox>
    <cbRecruitTable :p="candidates"/>
  </div>
</template>

<script>
import cbRecruitSearchBox from "./cbRecruitSearchBox";
import cbRecruitTable from "./cbRecruitTable";
export default {
  name: "cbRecruit",
  data() {
    return {
      candidates: []
    };
  },
  components: {
    cbRecruitSearchBox,
    cbRecruitTable
  },
  created() {
    $.get("http://10.35.164.14:3000/reperson/api/getReperson", data => {
      this.candidates = data;
    });
  }
};
</script>

<style scoped leng="scss">
.rightBox {
  width: 95%;
  height: calc(100% - 70px);
  margin: 0 auto;
}
</style>
