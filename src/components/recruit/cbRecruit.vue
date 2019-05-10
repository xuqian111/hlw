<template>
    <div class="rightBox">
      <cbRecruitSearchBox/>
      <cbRecruitTable/>
    </div>
</template>

<script>
  import cbRecruitSearchBox from './cbRecruitSearchBox'
  import cbRecruitTable from './cbRecruitTable'
    export default {
        name: "cbRecruit",
        components:{
          cbRecruitSearchBox,cbRecruitTable
        }
    }
</script>

<style scoped leng="scss">
.rightBox{
  width: 95%;
  height:calc(100% - 70px);
  margin: 0 auto;
}
</style>
