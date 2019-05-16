<template>
  <div class="rightBox">
    <cbRecruitSearchBox @parentClick="searchFunc" @parentReset="resetFunc"></cbRecruitSearchBox>
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
      candidates: [],
      searchData: [],
      is: []
    };
  },
  components: {
    cbRecruitSearchBox,
    cbRecruitTable
  },
  created() {
    $.get("http://10.35.164.14:3000/reperson/api/getReperson", data => {
      this.candidates = data;
      this.is = this.candidates;
    });
  },
  methods: {
    async searchFunc(obj) {
      this.searchData = [];
      await this.is.forEach(item => {
        if (item.reId.indexOf(obj.Id) != -1) {
          this.searchData.push(item);
        }
      });
      this.candidates = this.searchData;
      // if(obj.Name!==''){
      //   await this.searchData.forEach((item)=>{
      //     console.log(obj.Name)
      //     if(item.reName.indexOf(obj.Name)!=-1){
      //       this.searchData.push(item)
      //     }
      //   })
      // }
      //
      // if(obj.Phone!==''){
      //   await this.searchData.forEach((item)=>{
      //     if(item.rePhone.indexOf(obj.Phone)!=-1){
      //       this.searchData.push(item)
      //     }
      //   })
      // }

      await console.log(this.searchData);
      // this.is.forEach(item=>{
      //
      //   if((item.reAddress.indexOf(address.address) || item.reName.indexOf(Name.Name) || item.rePhone.indexOf(Phone.Phone)) != -1){
      //       this.searchData.push(item);
      //   }
      //   console.log(this.searchData)
      //
      // })
    },
    resetFunc() {
      this.candidates = this.is;
    }
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
