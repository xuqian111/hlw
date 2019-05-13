<template>
    <div class="title">
        <ul class="title_list">
            <li><p>部门管理：</p><input type="text"></li>
            <li><p>部门状态：</p>
                <el-select v-model="value" placeholder="所有">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </li>
            <li>
                <el-row>
                    <el-button type="primary" round icon="el-icon-search">搜索</el-button>
                    <el-button type="warning" round icon="el-icon-refresh">重置</el-button>
                </el-row>
            </li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'cbMenuTitleCom',
    data(){
        return{
            options: [{
                value: '选项1',
                label: '所有'
                }, {
                value: '选项2',
                label: '正常'
                }, {
                value: '选项3',
                label: '停用'
                }],
            value:''
        }
    }
}
</script>
<style scoped>
.title{
    display: block;
    margin-top: 10px;
    width: 100%;
    height: 40px;
    box-shadow: 1px 1px 3px rgba(0,0,0,.2);
    background-color: #fff;
    padding-top: 5px;
    padding-bottom: 13px;
}
.title_list{
    display: flex;
}
.title_list li{
    display: flex;
    margin-left: 19px;
    align-items: center;
}

.title_list li p{
    float: left;
    line-height: 40px;
    font-size: 13px;
    color: #333;
}
.title_list li input{
    border: 1px solid #ddd;
    border-radius: 4px;
    background: transparent;
    outline: none;
    box-sizing: border-box;
    height: 30px;
    width: 200px;
    padding-left: 5px;
}
.el-button--primary{
    color: #fff;
    background-color: #1ab394;
    border-color: #1ab394;
  }
  .el-button--primary:hover{
    background-color: #18a689;
    border-color: #18a689;  
  }
  .el-button--warning{
    color: #fff;
    background-color: #f8ac59;
    border-color: #f8ac59;
  }
  .el-button--warning:hover{
    background-color: #f7a54a;
    border-color: #f7a54a;  
  }
</style>


