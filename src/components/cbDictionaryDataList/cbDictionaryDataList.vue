<template>
    <div class="DictionaryListBox">
        <cbDictionaryDataListSearch/>
        <cbDictionaryDataListTable/>
    </div>

</template>

<script>
import cbDictionaryDataListSearch from './cbDictionaryDataListSearch'
import cbDictionaryDataListTable from './cbDictionaryDataListTable'


export default {
    name:"cbDictionaryDataList",
    components:{
        cbDictionaryDataListSearch,
        cbDictionaryDataListTable

    },
    data(){
        return{

        }
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
