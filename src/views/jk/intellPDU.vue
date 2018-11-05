<template>
  <div id="intellPDU" class="clearfix">
    <el-col class="section" :span="6" id="intellPDU-prof">
      <div class="section-title">
        <svg-icon class="svg-logo" id="svg-PDU" icon-class="PDU" />
        <span>智能PDU参数</span>
      </div>
      <div class="section-info">
        <div class="prof-item" v-for="item in intellPDUProgress">
          <div class="prof-title">{{item.profTitle}}</div>
          <div class="progress-box">
            <el-progress :color="item.progressBgColor" class="progress-item" :percentage="item.progPercentage" :show-text="false"></el-progress>
            <span class="progress-value"><span :class="item.progValueColor">{{item.progressValue}}</span> <i>{{item.progressUnit}}</i></span>
          </div>
        </div>
      </div>
    </el-col>
    <el-col class="section intellPDU-port" :span="4" v-for="item in intellPDUSec">
      <div class="section-title">
        <svg-icon class="svg-logo" icon-class="PDUPort" />
        <span>智能PDU端口-{{item.intellPDUNum}}</span>
      </div>
      <div class="section-info" id="intellPDU-info">
        <ul id="intellPDU-ul">
          <li class="intellPDU-detail">当前状态：<i :class="item.intellPDUStatusIcon" class="intellPDU-status-icon"></i></li>
          <li class="intellPDU-detail">连接设备：<span>{{item.intellPDUDevice}}</span></li>
          <li class="intellPDU-detail">通路电流：<span>{{item.intellPDUCurrent}}</span> A</li>
        </ul>
      </div>
    </el-col>
  </div>
</template>

<script>
  export default {
    name: 'intellCPU',
    data() {
      return {
        intellPDUProgress: [
          {
            profTitle: 'A相电压：',
            progPercentage: '52',
            progressBgColor: '#00ffff',
            progressValue: '250',
            progValueColor:'voltage-value-color',
            progressUnit: 'V'
          },
          {
            profTitle: 'A相电流：',
            progPercentage: '40',
            progressBgColor: '#ffff00',
            progressValue: '2.0',
            progValueColor:'current-value-color',
            progressUnit: 'A'
          },
          {
            profTitle: 'A相功率：',
            progPercentage: '52',
            progressBgColor: '#5245ff',
            progressValue: '2.0',
            progValueColor:'power-value-color',
            progressUnit: 'kw'
          },
          {
            profTitle: '频率：',
            progPercentage: '40',
            progressBgColor: '#00ff7e',
            progressValue: '60',
            progValueColor:'frequency-value-color',
            progressUnit: 'Hz'
          },
          {
            profTitle: '电能：',
            progPercentage: '57',
            progressBgColor: '#ff7815',
            progressValue: '250',
            progValueColor:'eleEnergy-value-color',
            progressUnit: 'kw•h'
          }
        ],
        intellPDUSec: [
          {
            intellPDUNum: '01',
            intellPDUStatusIcon: 'intellPDU-green-icon',
            intellPDUDevice: '智能风扇',
            intellPDUCurrent: '0.5'
          },
          {
            intellPDUNum: '02',
            intellPDUStatusIcon: 'intellPDU-red-icon'
          },
          {
            intellPDUNum: '03'
          },
          {
            intellPDUNum: '04'
          },
          {
            intellPDUNum: '05'
          },
          {
            intellPDUNum: '06'
          },
          {
            intellPDUNum: '07'
          },
          {
            intellPDUNum: '08'
          },
          {
            intellPDUNum: '09'
          },
          {
            intellPDUNum: '10'
          },
          {
            intellPDUNum: '11'
          },
          {
            intellPDUNum: '12'
          },
          {
            intellPDUNum: '13'
          },
          {
            intellPDUNum: '14'
          },
          {
            intellPDUNum: '15'
          },
          {
            intellPDUNum: '16'
          }
        ]
      }
    }
  }
</script>

<style lang="scss"></style>
