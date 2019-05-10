<template>
    <div class="DictionaryListBox">
        <cbDictionaryListSearch/>
        <cbDictionaryListTable/>
    </div>
</template>

<script>
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
