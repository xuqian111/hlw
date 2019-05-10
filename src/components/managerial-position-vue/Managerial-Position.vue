<template>
    <div class="Managerial_Position">
      <div class="Ma_Po_Section">
        <Managerial_Position_Con1></Managerial_Position_Con1>
        <Managerial_Position_Con2></Managerial_Position_Con2>
      </div>
    </div>
</template>

<script>
  import Managerial_Position_Con1 from "./Managerial_Position_Con1"
  import Managerial_Position_Con2 from "./Managerial_Position_Con2"
    export default {
        name: "Managerial_Position",
      components:{
        Managerial_Position_Con1,
        Managerial_Position_Con2

      }
    }
</script>

<style scoped>
  .Managerial_Position{
    position:relative;
    width:100%;
    height:800px;
    padding:20px 10px 0 10px;
    box-sizing: border-box;
    background:#f3f3f4;
  }
  .Ma_Po_Section{
    width:100%;
    padding:0 10px;
    box-sizing: border-box;
    background-clip: content-box;
  }

</style>
