<template>
  <div class="Managerial_Position">
    <div class="Ma_Po_Section">
      <Managerial_Position_Con1 :data="msg" ></Managerial_Position_Con1>
      <Managerial_Position_Con2 v-on:change="change" :data="datas"></Managerial_Position_Con2>
    </div>
  </div>
</template>

<script>
import Managerial_Position_Con1 from "./Managerial_Position_Con1";
import Managerial_Position_Con2 from "./Managerial_Position_Con2";
export default {
  name: "Managerial_Position",
  components: {
    Managerial_Position_Con1,
    Managerial_Position_Con2
  },
  data() {
    return {
      msg: true,
      datas:[
        // {
        //   serialnumbername:"岗位编号",
        //   codingname:"岗位编码",
        //   username:"岗位名称",
        //   ordername:"显示顺序",
        //   statusname:"状态",
        //   timename:"创建时间",
        //   dosomethingname:"操作",
        //   serialnumber:1,
        //   coding:"ceo",
        //   name:"董事长",
        //   order:1,
        //   status:"正常",
        //   time:"2018-03-16 11:33:00",
        //   dosomething1:"编辑",
        //   dosomething2:"删除",
        //   checked:false,
        // },
        // {
        //   serialnumbername:"岗位编号",
        //   codingname:"岗位编码",
        //   username:"岗位名称",
        //   ordername:"显示顺序",
        //   statusname:"状态",
        //   timename:"创建时间",
        //   dosomethingname:"操作",
        //   serialnumber:2,
        //   coding:"se",
        //   name:"项目经理",
        //   order:2,
        //   status:"正常",
        //   time:"2018-03-16 11:33:00",
        //   dosomething1:"编辑",
        //   dosomething2:"删除",
        //   checked:false,
        // },
        // {
        //   serialnumbername:"岗位编号",
        //   codingname:"岗位编码",
        //   username:"岗位名称",
        //   ordername:"显示顺序",
        //   statusname:"状态",
        //   timename:"创建时间",
        //   dosomethingname:"操作",
        //   serialnumber:3,
        //   coding:"hr",
        //   name:"人力资源",
        //   order:3,
        //   status:"正常",
        //   time:"2018-03-16 11:33:00",
        //   dosomething1:"编辑",
        //   dosomething2:"删除",
        //   checked:false,
        // },
        // {
        //   serialnumbername:"岗位编号",
        //   codingname:"岗位编码",
        //   username:"岗位名称",
        //   ordername:"显示顺序",
        //   statusname:"状态",
        //   timename:"创建时间",
        //   dosomethingname:"操作",
        //   serialnumber:4,
        //   coding:"user",
        //   name:"董事长",
        //   order:4,
        //   status:"正常",
        //   time:"2018-03-16 11:33:00",
        //   dosomething1:"编辑",
        //   dosomething2:"删除",
        //   checked:false,
        // }
      ],
    };
  },
  methods: {
    change() {
      this.msg = !this.msg;
    },

  },
  created() {
    fetch('http://10.35.164.14:3000/jobperson/api/getjobperson') // 返回一个Promise对象，
      .then((res)=>{
        return res.json(); // res.text()是一个Promise对象
      })
      .then((res)=>{
        this.datas=res;

      })
  },

};
</script>

<style scoped>
.Managerial_Position {
  position: relative;
  width: 100%;
  height: 800px;
  padding: 20px 10px 0 10px;
  box-sizing: border-box;
  background: #f3f3f4;
}
.Ma_Po_Section {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  background-clip: content-box;
}
</style>
