<template>
  <div id="weather">
    <el-row :gutter="5">
      <el-col :span="11">
        <div class="section" id="weather-prof">
          <div class="section-title">
            <svg-icon class="svg-logo" icon-class="weather"></svg-icon>
            <span>气象基本参数</span>
          </div>
          <div class="section-info clearfix" id="weather-info">
            <!--<ul>-->
            <!--<li class="clearfix"><span>品牌</span>：<i>美的</i></li>-->
            <!--<li class="clearfix"><span>型号</span>：<i>GY-250</i></li>-->
            <!--<li class="clearfix"><span>序列号</span>：<i>GY-123456</i></li>-->
            <!--<li class="clearfix"><span>安装时间</span>：<i>2018年10月20日</i></li>-->
            <!--</ul>-->
            <ul id="weather-ul2">
              <li class="clearfix" v-for="item in weatherProf2">
                <span>{{item.profItem}}</span>：<i>{{item.profParam}}</i> {{item.unit}}
              </li>
            </ul>
          </div>
        </div>
        <div class="section">
          <div class="section-title">
            <svg-icon class="svg-logo" icon-class="fengxiang"></svg-icon>
            <span>风向风速</span>
          </div>
          <div class="section-info">
            <div id="campus" :style="{width: '100%',height: '300px'}"></div>
          </div>
        </div>
      </el-col>
      <el-col :span="13">
        <div class="section">
          <div class="section-title">
            <svg-icon class="svg-logo" icon-class="intellFanLogo"></svg-icon>
            <span>时段风速</span>
          </div>
          <div class="section-info">
            <div id="graph" :style="{width: '100%', height: '300px'}"></div>
          </div>
        </div>
        <div class="section">
          <div class="section-title">
            <svg-icon class="svg-logo" icon-class="intellFanLogo"></svg-icon>
            <span>2min/10min 平均风速</span>
          </div>
          <div class="section-info">
            <div id="average" :style="{width: '100%', height: '300px'}"></div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  let echarts = require('echarts/lib/echarts');
  var colors = ['#5793f3', '#d14a61', '#675bba'];
  export default {
    name: 'weather',
    data() {
      return {
        weatherProf2: [
          {
            profItem: '品牌',
            profParam: '美的'
          },
          {
            profItem: '型号',
            profParam: 'GY-250'
          },
          {
            profItem: '序列号',
            profParam: 'GY-123456'
          },
          {
            profItem: '安装时间',
            profParam: '2018年10月20日'
          },
          {
            profItem: 'IP地址',
            profParam: '255.255.255.255'
          },
          {
            profItem: '温度',
            profParam: '20',
            unit: '℃'
          },
          {
            profItem: '湿度',
            profParam: '30',
            unit: '%'
          },
          {
            profItem: '气压(QNH)',
            profParam: '3.0',
            unit: 'Bar'
          },
          {
            profItem: '气压(QFE)',
            profParam: '2.0',
            unit: 'Bar'
          },
          {
            profItem: '电流',
            profParam: '0.6',
            unit: 'A'
          }
        ]
      }
    },
    mounted() {
      this.graphInfo();
      this.campusInfo();
      this.averageInfo();
    },
    methods: {
      graphInfo() {
        let graph = echarts.init(document.getElementById('graph'));
        graph.setOption({
          title: {
            text: '未来一周气温变化',
            subtext: '纯属虚构'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['最高气温','最低气温']
          },
          toolbox: {
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} °C'
            }
          },
          series: [
            {
              name:'最高气温',
              type:'line',
              smooth: true,
              data:[11, 11, 15, 13, 12, 13, 10],
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }
            },
            {
              name:'最低气温',
              type:'line',
              smooth: true,
              data:[1, -2, 2, 5, 3, 2, 0],
              markPoint: {
                data: [
                  {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'},
                  [{
                    symbol: 'none',
                    x: '90%',
                    yAxis: 'max'
                  }, {
                    symbol: 'circle',
                    label: {
                      normal: {
                        position: 'start',
                        formatter: '最大值'
                      }
                    },
                    type: 'max',
                    name: '最高点'
                  }]
                ]
              }
            }
          ]
        })
      },
      campusInfo() {
        let campus = echarts.init(document.getElementById("campus"));
        var option = {
          title: {
            x: "center",
            top: 0,
            text: '风速/风向模拟',
            textStyle: {
              fontWeight: 'normal',
              fontSize: 18,
              color: "#333"
            }
          },
          tooltip: {
            show: true,
            backgroundColor: '#fff',
            borderColor: '#f60',
            borderWidth: '1px',
            textStyle: {
              color: '#333'
            },
            formatter: function(param) {
              if(param.seriesIndex == 2){
                return '<em style="color:' + param.color + ';">当前风向:' + param.value + '</em> °'
              }
              if(param.seriesIndex == 3){
                return '<em style="color:' + param.color + ';">当前风速:' + param.value + '</em> m/s'
              }
            }
          },
          series: [
            {
              name: '',
              type: 'gauge',
              radius: '83%',
              min: 0,
              max: 360,
              startAngle: 90,
              endAngle: 449.9,
              splitNumber: 0,
              axisLine: {
                lineStyle: {
                  color: [
                    [0.5, '#ccc'],
                    [1, '#ccc']
                  ],
                  width: 4
                }
              },
              axisLabel: {
                show: false
              },
              detail: {
                show: false
              }
            },
            {
              type: 'gauge',
              radius: '80%',
              splitNumber: 1,
              min: 0,
              max: 360,
              startAngle: 90,
              endAngle: 449.9,
              axisLine: {
                show: false,
                lineStyle: {
                  width: 2,
                  shadowBlur: 0,
                  color: [
                    [1, '#8f8f8f']
                  ]
                }
              },
              axisTick: {
                show: true,
                lineStyle: {
                  color: '#8f8f8f',
                  width: 1
                },
                length: '-2%',
                splitNumber: 60
              },
              splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                  color: '#8f8f8f',
                }
              },
              axisLabel: {
                show: false
              },
              detail: {
                show: false
              }
            },
            {
              name: '',
              type: 'gauge',
              min: 0,
              max: 360,
              startAngle: 90,
              endAngle: -269.9999,
              radius: '80%',
              splitNumber: 12,
              axisLine: {
                lineStyle: {
                  width: 5,
                  shadowBlur: 0,
                  color: [
                    [0.25, '#DDBD4D'],
                    [0.5, '#E43F3D'],
                    [0.75, '#7CBB55'],
                    [1, '#9CD6CE']
                  ]
                }
              },
              axisTick: {
                show: true,
                splitNumber: 1
              },
              splitLine: {
                length: 10,
                lineStyle: {
                  width: 2
                }
              },
              axisLabel: {
                formatter: function(e) {
                  switch (e + "") {
                    case "0":
                      return "正北";
                    case "360":
                      return "正北";
                    case "180":
                      return "正南";
                    case "90":
                      return "正东";
                    case "270":
                      return "正西";
                    default:
                      return e;
                  }
                },
                textStyle: {
                  fontSize: 12,
                  fontWeight: ""
                }
              },
              pointer: {
                show: true,
              },
              detail: {
                formatter: function(param) {
                  var level = '';
                  if (param > 0 && param < 90) {
                    level = '东北'
                  } else if (param > 90 && param < 180) {
                    level = '东南'
                  } else if (param > 180 && param < 270) {
                    level = '西南'
                  } else if (param > 270 && param < 360) {
                    level = '西北'
                  } else if (param == 360) {
                    level = '正北'
                  } else if (param == 270) {
                    level = '正西'
                  } else if (param == 90) {
                    level = '正东'
                  } else if (param == 180) {
                    level = '正南'
                  }
                  return "当前风向:"+level + "(" + param + "°)";
                },
                offsetCenter: [0, 140],
                textStyle: {
                  fontSize: 40
                }
              },
              data: [{
                value: 279,
                name: ''
              }]
            },
            {
              name: '风速',
              type: 'gauge',
              center: ['60%', '35%'],
              radius: '22%',
              min: 0,
              max: 60,
              startAngle: 90,
              endAngle: -269.9999,
              splitNumber: 12,
              animation: 0,
              pointer: {
                show: 1,
                length: '60%',
                width: 3
              },
              itemStyle: {
                normal: {
                  color: '#00b0b0',
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                  shadowBlur: 10,
                  shadowOffsetX: 2,
                  shadowOffsetY: 2
                }
              },
              axisLine: {
                lineStyle: {
                  color: [
                    [1, '#337ab7']
                  ],
                  width: 6
                }
              },
              splitLine: {
                show: 1,
                length: 6,
                lineStyle: {
                  width: 1
                }
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: 1,
                distance: 1,
                textStyle: {
                  color: '#0000ff'
                },
                formatter: function(t) {
                  switch (t + '') {
                    case '10':
                      return '10';
                    case '20':
                      return '20';
                    case '30':
                      return '30';
                    case '40':
                      return '40';
                    case '50':
                      return '50';
                    case '60':
                      return '60';
                  }
                }
              },
              detail: {
                formatter: function(param) {
                  return "当前风速:" + param + "m/s";
                },
                offsetCenter: [0, 60],
                textStyle: {
                  fontSize: 12
                }
              },
              data: [{
                value: 3.2,
                name: ''
              }]
            }
          ]
        };
        setInterval(function() {
          var datavalue = (Math.random() * 360).toFixed(2);
          var datavalue2 = (Math.random() * 60).toFixed(2);
          option.series[2].data[0].value = datavalue;
          option.series[3].data[0].value = datavalue2;
          campus.setOption(option, true);
        }, 1000);
      },
      averageInfo() {
        let average = echarts.init(document.getElementById("average"));
        function randomData() {
          now = new Date(+now + oneDay);
          value = value + Math.random() * 21 - 10;
          return {
            name: now.toString(),
            value: [
              [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
              Math.round(value)
            ]
          }
        }
        var data = [];
        var now = +new Date(1997, 9, 3);
        var oneDay = 24 * 3600 * 1000;
        var value = Math.random() * 1000;
        for (var i = 0; i < 1000; i++) {
          data.push(randomData());
        }
        average.setOption({
          title: {
            text: '动态数据 + 时间坐标轴'
          },
          tooltip: {
            trigger: 'axis',
            formatter: function (params) {
              params = params[0];
              var date = new Date(params.name);
              return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
            },
            axisPointer: {
              animation: false
            }
          },
          xAxis: {
            type: 'time',
            splitLine: {
              show: false
            }
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
              show: false
            }
          },
          series: [{
            name: '模拟数据',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data
          }]
        })
        setInterval(function () {

          for (var i = 0; i < 5; i++) {
            data.shift();
            data.push(randomData());
          }

          average.setOption({
            series: [{
              data: data
            }]
          });
        }, 1000);
      }
    }
  }
</script>

<style lang="scss"></style>
