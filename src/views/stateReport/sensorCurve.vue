<template>
  <div id="sensorCurve">
    <el-col class="section" id="senCurve-section">
      <div class="section-title" id="senCurve-title">
        <el-col id="senCurve-title-left" :span="6">
          <svg-icon class="svg-logo" icon-class="" />
          <span>温湿度历史曲线</span>
        </el-col>
        <el-col id="senCurve-title-right">
          <el-date-picker v-model="value2" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"></el-date-picker>
        </el-col>
      </div>
      <div class="section-info senCurve-info">
        <div id="senCurve" :style="{width: '100%', height: '300px'}"></div>
      </div>
    </el-col>
  </div>
</template>

<script>
  let echarts = require('echarts/lib/echarts');
  export default {
    name: 'sensorCurve',
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value2: ''
      }
    },
    mounted () {
      this.curveInfo();
    },
    methods: {
      curveInfo() {
        let senCurve = echarts.init(document.getElementById('senCurve'));
        senCurve.setOption({
          title: {
            text: '折柱混合'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          toolbox: {
            feature: {
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          legend: {
            data:['蒸发量','降水量','平均温度']
          },
          xAxis: [
            {
              type: 'category',
              data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '水量',
              min: 0,
              max: 250,
              interval: 50,
              axisLabel: {
                formatter: '{value} ml'
              }
            },
            {
              type: 'value',
              name: '温度',
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                formatter: '{value} °C'
              }
            }
          ],
          series: [
            {
              name:'蒸发量',
              type:'bar',
              data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
              name:'降水量',
              type:'bar',
              data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
              name:'平均温度',
              type:'line',
              yAxisIndex: 1,
              data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
          ]
        })
      }
    }
  }
</script>

<style lang="scss">
  #senCurve-section {
    #senCurve-title {
      #senCurve-title-right {}
    }
  }
</style>
