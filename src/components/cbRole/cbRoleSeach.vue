<template>
  <div class="Sinput_Box">
    <div class="Sinput Sinput_one si">
      <span>角色名称&nbsp;:&nbsp;</span>
      <el-input v-model="input" placeholder></el-input>
    </div>
    <div class="Sinput Sinput_two si">
      <span>权限字符&nbsp;:&nbsp;</span>
      <el-input v-model="input2" placeholder></el-input>
    </div>
    <div class="Sinput_three si">
      <span>角色状态&nbsp;:&nbsp;</span>
      <el-select v-model="value8" filterable placeholder>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="Sinput_four">
      <div class="block">
        <span class="demonstration">创建时间&nbsp;:&nbsp;</span>
        <el-date-picker v-model="value4" type="month" placeholder="开始时间" :editable="editable"></el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">&nbsp;&nbsp;-&nbsp;&nbsp;</span>
        <el-date-picker v-model="value5" align="right" type="year" placeholder="结束时间"></el-date-picker>
      </div>
    </div>
    <div class="twoBut">
      <div class="searchBut">
        <el-button type="primary" icon="el-icon-search" round>搜索</el-button>
      </div>
      <div class="refreshBut">
        <el-button type="success" icon="el-icon-refresh" round>重置</el-button>
      </div>
    </div>
  </div>
</template>

<script type='text/javascript'>
export default {
  name: "cbRoleSeach",
  data() {
    return {
      input: "",
      input2: "",
      options: [
        {
          value: "选项1",
          label: "正常"
        },
        {
          value: "选项2",
          label: "所有"
        },
        {
          value: "选项3",
          label: "停用"
        }
      ],
      value8: "",
      value3: "",
      value4: "",
      value5: "",
      editable: true
    };
  },
  methods: {}
};
</script>

<style lang='scss' >
* {
  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.Sinput_Box {
  overflow: hidden;
  box-sizing: border-box;
}
// Sinpt
.Sinput {
  width: 280px;
  float: left;
  box-sizing: border-box;
  padding-right: 15px;
  margin-bottom: 10px;
  // display: -webkit-flex;
  span {
    float: left;
    font-size: 14px;
    color: #333333;
    line-height: 30px;
  }
  .el-input--small {
    float: left !important;
    width: 180px;
    .el-input__inner {
      width: 180px !important;
      height: 28px !important;
      outline: none !important;
      border: 1px solid #dddddd;
    }
  }
}
.Sinput_three {
  width: 280px;
  float: left;
  box-sizing: border-box;
  padding-right: 15px;
  margin-bottom: 10px;
  span {
    float: left;
    font-size: 14px;
    color: #333333;
    line-height: 30px;
  }
  .el-select--small {
    float: left !important;
    width: 180px;
    .el-input__inner {
      height: 28px !important;
    }
  }
}
.Sinput_four {
  overflow: hidden;
  // clear:both;
  float: left;
  display: -webkit-flex;
}
.block {
  overflow: hidden;
  clear: both;
  span {
    float: left;
    font-size: 14px;
    color: #333333;
    line-height: 30px;
  }
  .el-date-editor--month {
    width: 88px;
    //     float:left !important;
    //     width:88px !important;
    //     height:28px !important;
    .el-input__inner {
      width: 88px !important;
      padding: 0;
      text-indent: 6px;
    }
    .el-icon-date::before {
      content: "";
    }
  }
  .el-date-editor--year {
    width: 88px;
    //     float:left !important;
    //     width:88px !important;
    //     height:28px !important;
    .el-input__inner {
      width: 88px !important;
      padding: 0;
      text-indent: 6px;
    }
    .el-icon-date::before {
      content: "";
    }
  }
}
.el-date-picker__header--bordered {
  background-color: #009688;
  margin: 0;
  padding: 12px;
}
.twoBut {
  margin: 0px 0px 0px 12px;
  float: left;
  .searchBut {
    float: left;
    .el-button--small {
      padding: 10px;
    }
  }
  .refreshBut {
    margin-left: 12px;
    float: left;
    .el-button--small {
      padding: 10px;
    }
  }
}
</style>
