<template>
    <div class="DeparHeader">
        <div class="LaddNew">
            <cbNewDialog/>
            <el-button type="primary2" size="mini" icon="el-icon-edit-outline">修改</el-button>
            <el-button type="primary3" size="mini" icon="el-icon-folder-opened
">展开/折叠</el-button>
        </div>
        <div class="Rchart">
            <div class="refresh">
                <i class="el-icon-refresh"></i>
            </div>
            <div class="chart">
                <i class="el-icon-s-unfold"></i>
            </div>
        </div>
    </div>
</template>
<script>
import cbNewDialog from "./cbNewDialog";
export default {
    components: {
        cbNewDialog,
    },
    name:'cbChartDepar',
    methods: {
      open() {
        this.$alert('<div><h3>haha</h3></div>', {
          dangerouslyUseHTMLString: true
        });
      }
    }
}
</script>
<style scoped>
.DeparHeader{
    display: flex;
    justify-content: space-between;
    height: 42px;
    padding: 10px 15px;
    background-color: #fff;
    border-radius: 6px;
}
.el-button{
    margin-left: 0px;
}
.Rchart{
    box-sizing: border-box;
    display: flex;
    height: 34px;
    border: 1px solid #c2c2c2;
}
.el-button--primary1{
    color: #fff;
    background-color: #1c84c6;
    border-color: #1c84c6;
}
.el-button--primary1:hover{
    background-color: #1a7bb9;
    border-color: #1a7bb9;  
}
.el-button--primary2{
    color: #fff;
    background-color: #1ab394;
    border-color: #1ab394;
}
.el-button--primary2:hover{
    background-color: #18a689;
    border-color: #18a689;  
}
.el-button--primary3{
    color: #fff;
    background-color: #23c6c8;
    border-color: #23c6c8;
}
.el-button--primary3:hover{
    background-color: #21b9bb;
    border-color: #21b9bb;  
}
.refresh{
    box-sizing: border-box;
    text-align: center;
    line-height: 34px;
    width: 40px;
    height: 34px;
    border-right: 1px solid #c2c2c2;
}
.refresh:hover{
    background-color: #c2c2c2;
    color: #fff;
}
.chart{
    width: 51px;
    text-align: center;
    line-height: 34px;
    height: 34px;
}
.chart:hover{
    background-color: #c2c2c2;
    color: #fff;
}
</style>


