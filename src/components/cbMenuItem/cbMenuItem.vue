<template>
    <div class="gray-bg">
        <cbMenuTitleCom/>
        <div class="depar">
            <cbDepartopcom/>
            <cbTreetableCom/>
        </div>
    </div>
</template>

<script>
import cbMenuTitleCom from "./cbMenuTitleCom";
import cbDepartopcom from "./cbDepartopcom";
import cbTreetableCom from "./cbTreetableCom";


export default {
    name: 'cbMenuItem',
    components: {
        cbMenuTitleCom,
        cbDepartopcom,
        cbTreetableCom,
    }
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
a{
    text-decoration: none;
}
li{
    list-style-type: none;
}
.gray-bg{
    width: 100%;
    height: 100%;
    background: #f3f3f4;
    box-sizing: border-box;
    padding: 25px;
}
.depar{
    margin-top: 10px;
    border-radius: 6px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    box-shadow: 1px 1px 3px rgba(0,0,0,.2);
}
</style>


