<template>
  <div id="sensorCurve">
    <el-col class="section senCurve-section">
      <div class="section-title senCurve-title">
        <el-col class="senCurve-title-left" :span="11">
          <svg-icon class="svg-logo" icon-class="" />
          <span>温湿度历史曲线</span>
        </el-col>
        <el-col class="senCurve-title-right" :span="5">
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
            text: '温/湿度曲线',
            textStyle: {
              color: '#ffffff'
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
//              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          legend: {
            data:[
              {'name': '温度', textStyle: {color: '#ffffff'}},
              {'name': '湿度', textStyle: {color: '#ffffff'}}
            ]
          },
          color: ['#3237ff','#00ffff'],
          xAxis: [
            {
              type: 'category',
              data: ['00时','01时','02时','03时','04时','05时','06时','07时','08时','09时','10时','11时',
                '12时','13时','14时','15时','16时','17时','18时','19时','20时',
                '21时','22时','23时','24时'],
              axisLabel: {
                textStyle: {
                  color: '#ffffff'
                }
              },
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '温度',
              min: 0,
              max: 30,
              interval: 5,
              axisLabel: {
                formatter: '{value} %',
                textStyle: {
                  color: '#ffffff'
                }
              }
            },
            {
              type: 'value',
              name: '湿度',
              min: 0,
              max: 30,
              interval: 5,
              axisLabel: {
                formatter: '{value} °C',
                textStyle: {
                  color: '#ffffff'
                }
              }
            }
          ],
          series: [
            {
              name:'温度',
              type:'line',
              smooth: true,
              lineStyle: {
                normal: {
                  color: '#3237ff'
                }
              },
              yAxisIndex: 1,
              data:[15,22,16,14,16,23,15,18,16,25,
                18,15,14,16,19,15,23,20,15,10,
                15,15,14,13,14]
            },
            {
              name:'湿度',
              type:'line',
              smooth: true,
              lineStyle: {
                normal: {
                  color: '#00ffff'
                }
              },
              data:[7,8,8,8,6,8,9,9,7,8,
                7,8,8,10,7,8,7,10,8,8,
                7,8,9,7,8]
            }
          ]
        })
      }
    }
  }
</script>

<style lang="scss">
  .senCurve-section {
    .senCurve-title {
      display: flex;
      justify-content: space-between;
      .senCurve-title-right {
        height: 100%;
        .el-input {
          width: 100%;
          height: 100%;
          .el-input__inner {
            height: 100%;
          }
          .el-input__prefix {
            .el-input__icon {
              line-height:inherit;
            }
          }
          .el-input__suffix {
            height: 100%;
            .el-input__suffix-inner {
              .el-input__icon {
                line-height:inherit;
              }
            }
          }
        }
      }
    }
  }
</style>
