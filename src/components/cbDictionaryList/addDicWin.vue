<template>

            <el-dialog title="添加类型" :visible.sync="addFormVisible">
                <el-form :model="form">
                  <el-form-item label="字典名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>

                  <el-form-item label="字典类型" :label-width="formLabelWidth">
                    <el-input v-model="form.type" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="状态" :label-width="formLabelWidth">
                      <el-radio-group v-model="form.status">
                        <el-radio label="正常"></el-radio>
                        <el-radio label="停用"></el-radio>
                      </el-radio-group>
                  </el-form-item>
                <el-form-item label="备注" :label-width="formLabelWidth">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="addFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="addFormVisible = false">确 定</el-button>
                </div>
              </el-dialog>
</template>

<script>



export default {
    name:"addDicWin",
    components:{


    },
     data() {
      return {
           addFormVisible: false,
           form: {
             name: '',
             type: '',
             status: '',
             desc: ''
           },
          formLabelWidth: '100px',
    }
}
}
</script>

<style scoped>

</style>
