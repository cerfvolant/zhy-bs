<template>
  <div id="netConf">
    <el-col class="section" id="netConf-sec">
      <div class="section-title">
        <svg-icon class="svg-logo" icon-class="" />
        <span>网端设置</span>
      </div>
      <div class="section-info" id="netConf-info">
        <div id="netConf-ul" v-for="item in netConfUl">
          <label for="netConfTitle">{{item.netConfTitle}}：</label>
          <input id="netConfTitle" type="text">
        </div>
        <div id="netConf-btn">
          <el-button>配置</el-button>
          <el-button type="success" plain>重置</el-button>
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
  export default {
    name: 'netConf',
    data() {
      return {
        netConfUl: [
          {
            netConfTitle: 'IP地址'
          },
          {
            netConfTitle: '网关掩码'
          },
          {
            netConfTitle: 'IP网关'
          }
        ]
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  #netConf-sec {
    height: 550px;
    #netConf-info {
      #netConf-ul {
        box-sizing: content-box;
        label , input {
          display: block;
          width: 100%;
        }
        input {
          background-color: #313131;
          border: 1px solid #000000;
          color: #ffffff;
          outline: none;
          padding: 8px 0;
          text-indent: 6px;
          margin: 10px 0;
        }
      }
      #netConf-btn {
        padding: 10px 0;
        .el-button {
          padding: 9px 22px;
        }
      }
    }
  }
</style>
