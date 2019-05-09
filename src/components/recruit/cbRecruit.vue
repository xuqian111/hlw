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
  margin: 0 auto;
}
</style>
