<template>
    <div class="DListSearch">
        <el-form :inline="true" :model="formInline"  label-width="100px" class="demo-ruleForm">
            <el-form-item label="字典名称 :" prop="name">
                <el-input v-model="formInline.name"></el-input>
            </el-form-item>

            <el-form-item label="字典类型 :" prop="type">
                <el-input v-model="formInline.type"></el-input>
            </el-form-item>

            <el-form-item label="字典状态 :" prop="region">
                <el-select v-model="formInline.region" placeholder="所有">
                    <el-option label="所有" value="all"></el-option>
                    <el-option label="正常" value="normal"></el-option>
                    <el-option label="停用" value="stopuse"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="创建时间 :">
                <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="开始日期" v-model="formInline.date1" style="width: 55%;margin-right:0;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="2">—</el-col>
                <el-col :span="11">
                    <el-form-item prop="date2">
                        <el-date-picker type="date" placeholder="结束日期" v-model="formInline.date2" style="width: 55%;"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
    
            <el-form-item>
                <el-button type="success" round @click="submitForm('formInline')"><i class="el-icon-search"></i>搜索</el-button>
                <el-button  type="warning" round @click="resetForm('formInline')"><i class="el-icon-refresh"></i> 重置</el-button>
            </el-form-item>
        </el-form>        
    </div>
</template>

<script>


export default {
    name:"cbDictionaryListSearch",
    components:{


    },
    data() {
      return {
        formInline: {
          name: '',
          type:'',
          region: '',
          date1: '',
          date2: ''
        
        },
        rules: {
          name: [
            { required: true, message: '请输入字典名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          type: [
            { required: true, message: '请输入字典类型', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  
}
</script>

<style scoped>
.DListSearch{
    width: 100%;
    height: 98px;
    background: #fff;
    border-radius: 6px;
    margin-top: 10px;
    padding-top: 10px;
    box-shadow: 1px 1px 3px rgba(0,0,0,.2);
}
 .DListSearch .el-form-item {
    margin-right: 0px;
}
.el-form-item .label{
    text-align: left;
    margin-left: 10px;
}
</style>
