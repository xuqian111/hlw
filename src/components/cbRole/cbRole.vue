<template>
    <div class="roleMain">
        <div class="seachBox">
            <RoleSeach/>
        </div>
        <div class="roleBox">
            <RoleMain/>
        </div>
    </div>
</template>

<script type='text/javascript'>

    import RoleSeach from './cbRoleSeach'
    import RoleMain from './cbRoleMain'

    export default {
        name: "cbRole",
        components:{
            RoleSeach,RoleMain
        },
        data() {
            return {
                
            };
        },
        methods: {

        }
    };
</script>

<style lang='scss' scoped>
.roleMain{
    // height:100%;
    padding:20px;
    background-color:#f3f3f4;
}
.seachBox{
    width: 100%;
    background: #fff;
    border-radius: 6px;
    // margin-top: 10px;
    // padding-top: 5px;
    // padding-bottom: 13px;
    padding:10px 15px;
    box-sizing:border-box;
    box-shadow: 1px 1px 3px rgba(0,0,0,.2);
}
</style>
