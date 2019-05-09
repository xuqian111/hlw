<template>
        <div class="Sinput_Box">
            <div class="Sinput Sinput_one si">
                <span>角色名称 : </span>
                <el-input v-model="input" placeholder=""></el-input>
            </div>
            <div class="Sinput Sinput_two si">
                <span>权限字符 : </span>
                <el-input v-model="input" placeholder=""></el-input>
            </div>
            <div class="Sinput Sinput_three si">
                <span>角色状态 : </span>
                <el-select  v-model="value8" filterable placeholder="">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="Sinput Sinput_four">
                <div class="block">
                    <span class="demonstration" >创建时间 : </span>
                    <el-date-picker
                        v-model="value4"
                        type="month"
                        placeholder="开始时间">
                    </el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">-</span>
                    <el-date-picker
                        v-model="value5"
                        align="right"
                        type="year"
                        placeholder="结束时间">
                    </el-date-picker>
                </div>
            </div>
        </div>
</template>

<script type='text/javascript'>
    export default {
        name: "cbRoleSeach",
        data() {
            return {
                input: '',
                options: [{
                    value: '选项1',
                    label: '正常'
                    }, {
                    value: '选项2',
                    label: '所有'
                    }, {
                    value: '选项3',
                    label: '停用'
                    }],
                    value8: '',
                    value3: '',
                    value4: '',
                    value5: ''
            };
        },
        methods: {

        }
    };
</script>

<style lang='scss' >
*{
    font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.Sinput_Box{
    overflow: hidden;
}
// Sinpt
.Sinput{
    float:left;
    // width:25%;
    box-sizing:border-box;
    padding-right:15px;
    display: -webkit-flex;
    span{
        float:left !important;
        font-size:14px;
        color:#333333;
        line-height:30px;
    }
    .el-input--small{
        float:left !important;
        .el-input__inner{
            width:180px !important;
            height:28px !important;
            outline:none !important;
        }
    }
    .el-input__inner:focus{
        outline:none !important;
    }
}
.si span{
    width:94px;
}
.block{
    span{
        float:left !important;
    }
    .el-date-editor{
        float:left !important;
        width:88px !important;
        height:28px !important;
    }
    .el-input__inner{
        width:88px !important;
        height:28px !important;
    }
}
.Sinput_four{
    clear:both;
    .block:first-child{
        margin-right:6px;
    }
    .block:last-child{
        span{
            margin-right:6px;
        }
    }
}
</style>
