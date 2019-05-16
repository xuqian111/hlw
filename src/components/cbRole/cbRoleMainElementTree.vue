<template>
    <div class="elementTree">
        <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]"
            :props="defaultProps">
        </el-tree>
    </div>
</template>

<script type='text/javascript'>
    export default {
        
      props:['defaultProps','data'],
        data() {
            return {
               
            };
        }
    }
</script>

<style scoped>
.elementTree{
    padding-left:50px;
}
</style>
