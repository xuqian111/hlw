<template>
    <div>
        <div>
            <userSearch/>
        </div>
        <div>
            <userMain/>
        </div>
    </div>
</template>

<script>
    import userSearch from './cbAlloUserSeach'
    import userMain from './cbAlloUserMain'
    export default {
        name:'allocationUser',
        data(){
            return{
                userSearch,
                userMain
            }
        }
    }
</script>

<style scoped>

</style>
