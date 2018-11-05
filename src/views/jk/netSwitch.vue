<template>
  <div id="netSwitch">
    <el-col class="section" id="netSw-prof">
      <div class="section-title">
        <svg-icon class="svg-logo" icon-class="wljhj"></svg-icon>
        <span>网络交换机-S2700-26TP-EI-AC型</span>
      </div>
      <div class="section-info" id="netSw-info">
        <ul id="netSw-ul">
          <li v-for="item in netSwProf">{{item.profItem}}：<span>{{item.profParam}}</span> {{item.unit}}</li>
          <svg-icon icon-class="netSwitch-jk-big"></svg-icon>
          <svg-icon icon-class="netSwitch-jk-small"></svg-icon>
        </ul>
      </div>
    </el-col>
    <!--<el-col class="section netSw-port" :span="4" v-for="item in netSwPort">-->
    <!--<div class="section-title">-->
    <!--<i class="el-icon-menu"></i>-->
    <!--<span>接口-{{item.netSwPortNum}}</span>-->
    <!--</div>-->
    <!--<div class="section-info" id="netSw-port-info">-->
    <!--<ul id="netSw-port-ul">-->
    <!--<li class="netSw-detail">IP:{{item.netSwIPAddress}}</li>-->
    <!--<li class="netSw-detail">状态：<i :class="item.netSwStatusIcon" class="netSw-status-icon"></i></li>-->
    <!--<li class="netSw-detail">流入量：<span class="netSw-num">{{item.netSwInflux}}</span> Byte</li>-->
    <!--<li class="netSw-detail">流出量：<span class="netSw-num">{{item.netSwEfflux}}</span> Byte</li>-->
    <!--</ul>-->
    <!--</div>-->
    <!--</el-col>-->
  </div>
</template>

<script>
  export default {
    name: 'netSwitch',
    data() {
      return {
        netSwProf: [
          {
            profItem: '品牌',
            profParam: '华为HUAWEI'
          },
          {
            profItem: '型号',
            profParam: 'S2700-26TP-EI-AC型'
          },
          {
            profItem: '安装时间',
            profParam: '2018年10月10日'
          },
          {
            profItem: '序列号',
            profParam: 'SN-123456789'
          },
          {
            profItem: '电流',
            profParam: '0.6',
            unit: 'A'
          }
        ],
        netSwPort: [
          {
            netSwPortNum: '01',
            netSwIPAddress:'225.225.225.225',
            netSwStatusIcon: 'netSw-green-icon',
            netSwInflux: '1024',
            netSwEfflux: '1024'
          },
          {
            netSwPortNum: '02',
            netSwStatusIcon: 'netSw-red-icon',
          },
          {
            netSwPortNum: '03',
            netSwStatusIcon: 'netSw-red-icon',
          },
          {
            netSwPortNum: '04'
          },
          {
            netSwPortNum: '05'
          },
          {
            netSwPortNum: '06'
          },
          {
            netSwPortNum: '07'
          },
          {
            netSwPortNum: '08'
          },
          {
            netSwPortNum: '09'
          },
          {
            netSwPortNum: '10',
          },
          {
            netSwPortNum: '11'
          },
          {
            netSwPortNum: '12'
          },
          {
            netSwPortNum: '13'
          },
          {
            netSwPortNum: '14'
          },
          {
            netSwPortNum: '15'
          },
          {
            netSwPortNum: '16'
          },
          {
            netSwPortNum: '17'
          },
          {
            netSwPortNum: '18'
          },
          {
            netSwPortNum: '19',
          },
          {
            netSwPortNum: '20'
          },
          {
            netSwPortNum: '21'
          },
          {
            netSwPortNum: '22'
          },
          {
            netSwPortNum: '23'
          },
          {
            netSwPortNum: '24'
          },
          {
            netSwPortNum: '25'
          },
          {
            netSwPortNum: '26'
          },
        ]
      }
    }
  }
</script>

<style lang="scss"></style>
