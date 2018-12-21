<template>
  <div :class="className" :id="id" :style="{height:height,width: width}"></div>
</template>

<script>
  import echarts from 'echarts'
  import resize from './resize'
  export default {
    mixins: [resize],
    props: {
      className: {
        type: String,
        default: 'chart'
      },
      id: {
        type: String,
        default: 'chart'
      },
      width: {
        type: String,
        default: '300px'
      },
      height: {
        type: String,
        default: '300px'
      }
    },
    data() {
      return {
        chart: null
      }
    },
    mounted() {
      this.initChart()
    },
    methods: {
      initChart() {
        this.chart = echarts.init(document.getElementById(this.id))
        this.chart.setOption({
          title: {
            text: '',
            textStyle: {
              color: '#ffffff'
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['00:00', '00:02', '00:04', '00:06', '00:08', '00:10', '00:12', '00:14',
              '00:16', '00:18', '00:20', '00:22', '00:24', '00:26', '00:28', '00:30', '00:32',
              '00:34', '00:36', '00:38','00:40', '00:42', '00:44', '00:46', '00:48','00:50','00:52','00:54','00:56',
              '00:58','1:00']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} m/s'
            },
            axisPointer: {
              snap: true
            }
          },
          visualMap: {
            show: false,
            dimension: 0,
            pieces: [{
              lte: 6,
              color: 'green'
            }, {
              gt: 6,
              lte: 8,
              color: 'red'
            }, {
              gt: 8,
              lte: 14,
              color: 'green'
            }, {
              gt: 14,
              lte: 17,
              color: 'red'
            }, {
              gt: 17,
              color: 'green'
            }]
          },
          series: [
            {
              name:'2min平均速度',
              type:'line',
              smooth: true,
              data: [13,10,13,14,12,13,10,13,14,12,
                13,10,13,14,12,13,10,13,14,12,
                13,10,13,14,12,13,10,13,14,12,
                13,10,13,14,12,13,10,13,14,12,
                13,10,13,14,12,13,10,13,14,12,
                13,10,13,14,12,13,10,13,14,12,],

            }
          ]
        })
      }
    }
  }
</script>

<style lang="scss">
</style>
