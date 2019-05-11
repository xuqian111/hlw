<template>
    <div class="DListSearch">
        <el-form :inline="true" :model="formInline"  label-width="100px" class="demo-ruleForm">
            <el-form-item label="字典名称 :" prop="dictionaryName">
                <el-select v-model="formInline.dictionaryName" placeholder="用户性别">
                    <el-option label="用户性别" value="userSex"></el-option>
                    <el-option label="菜单状态" value="menuState"></el-option>
                    <el-option label="系统开关" value="systemKg"></el-option>
                    <el-option label="任务状态" value="taskState"></el-option>
                    <el-option label="系统是否" value="systemIs"></el-option>
                    <el-option label="通知类型" value="noticeType"></el-option>
                    <el-option label="通知状态" value="noticeState"></el-option>
                    <el-option label="操作类型" value="operateType"></el-option>
                    <el-option label="系统状态" value="systemState"></el-option> 
                </el-select>
            </el-form-item>

            <el-form-item label="字典类型 :" prop="type">
                <el-input v-model="formInline.type"></el-input>
            </el-form-item>

            <el-form-item label="字典状态 :" prop="dictionaryState">
                <el-select v-model="formInline.dictionaryState" placeholder="所有">
                    <el-option label="所有" value="all"></el-option>
                    <el-option label="正常" value="normal"></el-option>
                    <el-option label="停用" value="stopuse"></el-option>
                </el-select>
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
    name:"cbDictionaryDataListSearch",
    components:{


    },
    data() {
      return {
        formInline: {
          dictionaryName: '',
          type:'',
          dictionaryState: ''
        
        
        },
        rules: {
          dictionaryName: [
            { required: true, message: '请输入字典名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          type: [
            { required: true, message: '请输入字典类型', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          dictionaryState: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
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
    /* height: 98px; */
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
