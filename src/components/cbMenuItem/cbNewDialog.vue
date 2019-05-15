<template>
<div id="box">
    <el-button size="mini" type="warning" @click="dialogFormVisible = true">新建</el-button>
  
    <el-dialog title="修改部门" :visible.sync="dialogFormVisible">
    <el-form :model="form">
        <el-form-item label="上级部门" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="深圳总公司" value="深圳总公司"></el-option>
            <el-option label="长沙分公司" value="长沙分公司"></el-option>
        </el-select>
        </el-form-item>
        <el-form-item label="部门名称" :label-width="formLabelWidth">
        <el-select v-model="form.paixu" placeholder="请选择部门">
            <el-option label="研发部门" value="1"></el-option>
            <el-option label="市场部门" value="2"></el-option>
            <el-option label="测试部门" value="3"></el-option>
            <el-option label="财务部门" value="4"></el-option>
            <el-option label="运维部门" value="5"></el-option>
        </el-select>
        </el-form-item>
        <el-form-item label="显示排序" :label-width="formLabelWidth">
        <el-input v-model="form.paixu" autocomplete="off" value="1"></el-input>
        </el-form-item>
        <el-form-item label="负责人" :label-width="formLabelWidth">
        <el-input v-model="form.name"  autocomplete="off" placeholder="刘春俊"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" :label-width="formLabelWidth">
        <el-input v-model="form.phone" autocomplete="off" placeholder="1888888888"></el-input>
        </el-form-item>
        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" :label-width="formLabelWidth" class="demo-dynamic">
        <el-form-item prop="email" label="邮箱" :rules="[{ required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
            ]"
        >
             <el-input v-model="dynamicValidateForm.email"></el-input>
        </el-form-item>
        </el-form>
        <el-form-item label="部门状态" :label-width="formLabelWidth">
            <el-radio v-model="radio" label="1">正常</el-radio>
            <el-radio v-model="radio" label="2">停用</el-radio>
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false" >确 定</el-button>
    </div>
    </el-dialog>
</div>
    
</template>
<script>
  export default {
    data() {
      return {
        dynamicValidateForm: {
          email: ''
        },
        radio: '1',
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    }
  };
</script>
<style scoped>
#box{
    display: inline!important;
}
</style>



