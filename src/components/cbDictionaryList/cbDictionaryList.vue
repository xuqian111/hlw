<template>
    <div class="DictionaryListBox" @getNew="fetchNewData">
        <cbDictionaryListSearch :datas="tableData"/>
        <cbDictionaryListTable :datas="tableData"/>
    </div>
</template>

<script>
import Axios from 'axios' 
import cbDictionaryListSearch from './cbDictionaryListSearch'
import cbDictionaryListTable from './cbDictionaryListTable'


export default {
    name:"cbDictionaryList",
    components:{
        cbDictionaryListSearch,
        cbDictionaryListTable

    },
    data(){
        return{
            tableData:''
        }
    },
    methods:{
        fetchNewData(){
            console.log(11)
            Axios({
                    method:'get',
                    url:'http://10.35.164.14:3000/word/api/getWord'
                    // data:form
                 })
                  .then(function(res){
                  // res = JSON.stringifyres
                  _this.tableData = res.data;
                //   console.log('-------',_this.tableData);
                }).catch(function(error){
                      alert(error);
                  })
        }
    },
    created(){
         let _this = this
       Axios({
                    method:'get',
                    url:'http://10.35.164.14:3000/word/api/getWord'
                    // data:form
                 })
                  .then(function(res){
                  // res = JSON.stringifyres
                  _this.tableData = res.data;
                //   console.log('-------',_this.tableData);
                }).catch(function(error){
                      alert(error);
                  })
    }
}
</script>

<style scoped>
    .DictionaryListBox{
        width: 100%;
        height: 100%;
        padding: 10px 20px;
        background-color: #F5F5F5;
        box-sizing: border-box;
    }
</style>
