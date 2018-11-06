<template>
  <div id="PBX">
    <el-col class="section" id="PBX-prof">
      <div class="section-title">
        <svg-icon class="svg-logo" icon-class="PBXLogo"></svg-icon>
        <span>语音交换机</span>
      </div>
      <div class="section-info clearfix" id="PBX-info">
        <ul>
          <li class="clearfix"><span>品牌</span>：<i>西门子</i></li>
          <li class="clearfix"><span>型号</span>：<i>IMMC-100AC</i></li>
          <li class="clearfix"><span>序列号</span>：<i>YY-1026938</i></li>
          <li class="clearfix"><span>安装时间</span>：<i>2018年10月20日</i></li>
        </ul>
        <ul id="PBX-ul2">
          <li class="clearfix" v-for="item in PBXProf2">
            <span>{{item.profItem}}</span>：<i>{{item.profParam}}</i> {{item.unit}}
          </li>
        </ul>
        <div id="PBX-use-rate">
          <el-progress id="PBX-ratio-chart" type="circle" :percentage="75"></el-progress>
          <span>CPU使用率</span>
        </div>
      </div>
    </el-col>
    <el-col class="section PBX-port" :span="4" v-for="item in PBXPort">
      <div class="section-title">
        <svg-icon class="svg-logo" icon-class="portLogo"></svg-icon>
        <span>SIP中继接口-{{item.PBXPortNum}}</span>
      </div>
      <div class="section-info PBX-port-info">
        <ul class="PBX-port-ul">
          <li class="PBX-detail">IP:<span>{{item.PBXIPAddress}}</span></li>
          <li class="PBX-detail">状态：
            <svg-icon class="PBX-status-icon" :icon-class="item.PBXStatus"></svg-icon>
          </li>
        </ul>
      </div>
    </el-col>
  </div>
</template>

<script>
  export default {
    name: 'PBX',
    data() {
      return {
        PBXProf2: [
          {
            profItem: 'IP地址',
            profParam: '255.255.255.255'
          },
          {
            profItem: '电流',
            profParam: '0.8',
            unit: 'A'
          }
        ],
        PBXPort: [
          {
            PBXPortNum: '01',
            PBXIPAddress: '225.225.225.225',
            PBXStatus: 'PBXNormal'
          },
          {
            PBXPortNum: '02',
            PBXIPAddress: '225.225.225.225',
            PBXStatus: 'PBXNormal'
          },
          {
            PBXPortNum: '03',
            PBXIPAddress: '225.225.225.225',
            PBXStatus: 'PBXNormal'
          },
          {
            PBXPortNum: '04',
            PBXIPAddress: '225.225.225.225',
            PBXStatus: 'PBXNormal'
          },
          {
            PBXPortNum: '05',
            PBXIPAddress: '225.225.225.225',
            PBXStatus: 'PBXNormal'
          }
        ]
      }
    }
  }
</script>

<style lang="scss"></style>
