<template>
  <div id="netSwitch">
    <el-col class="section" id="netSw-prof">
      <div class="section-title">
        <svg-icon class="svg-logo" icon-class="wljhj"></svg-icon>
        <span>网络交换机-S2700-26TP-EI-AC型</span>
      </div>
      <div class="section-info" id="netSw-info">
        <ul id="netSw-info-ul">
          <li v-for="item in netSwProf">{{item.profItem}}：<span>{{item.profParam}}</span> {{item.unit}}</li>
        </ul>
      </div>
    </el-col>
    <el-col class="section">
      <div class="section-title">
        <svg-icon class="svg-logo" icon-class="portLogo"></svg-icon>
        <span>网络交换机端口</span>
      </div>
      <div id="netSw-detail">
        <!--图标接口tab上部--切换-->
        <div id="netSw-tab">
          <ul id="netSw-tab-ul">
            <li
              @click.native="isTabNative(index)"
              :class="item.doTabIconActive?'tabIconChange':'tabIconNotChange'"
              class="netSw-tab-li"
              v-for="item in netSwTab">
              <svg-icon class="netSw-tab-icon" :icon-class="item.netSwTabIcon"></svg-icon>
              <!--<svg-icon-->
                <!--@click.native="isTabNative(index)"-->
                <!--:class="item.doTabIconActive?'tabIconChange':'tabIconNotChange'"-->
                <!--class="netSw-tab-icon" v-for="(item,index) in netSwTab"-->
                <!--:icon-class="item.netSwTabIcon">-->
              <!--</svg-icon>-->
            </li>
          </ul>
        </div>
        <!--接口item详情-->
        <div class="netSw-port" id="netSw-port1">
          <div class="netSw-port-box clearfix">
            <!--接口sub切换-->
            <ul class="netSw-ul">
              <li @click="isSubNative(index)" class="netSw-li" v-for="(item,index) in netSwLi">
                <svg-icon
                  :class="item.doSubIconActive?'subIconChange':'subIconNotChange'"
                  class="netSw-item-icon"
                  :icon-class="item.netSwItemIcon">
                </svg-icon>
              </li>
            </ul>
            <!--各接口盒子-->
            <div class="netSw-items-box" v-for="(i,index) in netSwBlock">
              <div class="section netSw-item" v-for="item in i.netSwItem">
                <div class="section-title">
                  <svg-icon class="svg-logo" icon-class="portLogo"></svg-icon>
                  <span>接口</span>
                </div>
                <div class="section-info">
                  <ul class="section-ul">
                    <li class="netSw-detail">状态：<i :class="item.netSwStatusIcon"></i></li>
                    <li class="netSw-detail">流入量：<span>{{item.netSwInflux}}</span> Byte</li>
                    <li class="netSw-detail">流出量：<span>{{item.netSwEfflux}}</span> Byte</li>
                    <li class="netSw-detail">IP：<span>{{item.netSwIP}}</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        netSwTab: [
          {
            netSwTabIcon: 'netSwitch-jk-big',
            doTabIconActive: true
          },
          {
            netSwTabIcon: 'netSwitch-jk-big',
            doTabIconActive: false
          },
          {
            netSwTabIcon: 'netSwitch-jk-big',
            doTabIconActive: false
          },
          {
            netSwTabIcon: 'netSwitch-jk-small',
            doTabIconActive: false
          }
        ],
        netSwLi: [
          {
            netSwItemIcon: 'portLogo',
            doSubIconActive: true
          },
          {
            netSwItemIcon: 'portLogo',
            doSubIconActive: false
          },
          {
            netSwItemIcon: 'portLogo',
            doSubIconActive: false
          },
          {
            netSwItemIcon: 'portLogo',
            doSubIconActive: false
          },
          {
            netSwItemIcon: 'portLogo',
            doSubIconActive: false
          },
          {
            netSwItemIcon: 'portLogo',
            doSubIconActive: false
          },
          {
            netSwItemIcon: 'portLogo',
            doSubIconActive: false
          },
          {
            netSwItemIcon: 'portLogo',
            doSubIconActive: false
          }
        ],
        netSwBlock: [
          {
            netSwItem: [
              {
                netSwStatusIcon: 'normal',
                netSwInflux: '1024',
                netSwEfflux: '1024',
                netSwIP: '225.225.225.225'
              },
              {
                netSwStatusIcon: 'normal',
                netSwInflux: '1024',
                netSwEfflux: '1024',
                netSwIP: '225.225.225.225'
              },
              {
                netSwStatusIcon: 'normal',
                netSwInflux: '1024',
                netSwEfflux: '1024',
                netSwIP: '225.225.225.225'
              },
              {
                netSwStatusIcon: 'normal',
                netSwInflux: '1024',
                netSwEfflux: '1024',
                netSwIP: '225.225.225.225'
              }
            ]
          },
          {
            netSwItem: [
              {
                netSwStatusIcon: 'normal',
                netSwInflux: '1024',
                netSwEfflux: '1024',
                netSwIP: '225.225.225.225'
              },
              {
                netSwStatusIcon: 'normal',
                netSwInflux: '1024',
                netSwEfflux: '1024',
                netSwIP: '225.225.225.225'
              },
              {
                netSwStatusIcon: 'normal',
                netSwInflux: '1024',
                netSwEfflux: '1024',
                netSwIP: '225.225.225.225'
              },
              {
                netSwStatusIcon: 'normal',
                netSwInflux: '1024',
                netSwEfflux: '1024',
                netSwIP: '225.225.225.225'
              }
            ]
          }
        ],
//        netSwPort: [
//          {
//            netSwPortNum: '01',
//            netSwIPAddress:'225.225.225.225',
//            netSwStatusIcon: 'netSw-green-icon',
//            netSwInflux: '1024',
//            netSwEfflux: '1024'
//          },
//          {
//            netSwPortNum: '02',
//            netSwStatusIcon: 'netSw-red-icon',
//          },
//          {
//            netSwPortNum: '03',
//            netSwStatusIcon: 'netSw-red-icon',
//          },
//          {
//            netSwPortNum: '04'
//          },
//          {
//            netSwPortNum: '05'
//          },
//          {
//            netSwPortNum: '06'
//          },
//          {
//            netSwPortNum: '07'
//          },
//          {
//            netSwPortNum: '08'
//          },
//          {
//            netSwPortNum: '09'
//          },
//          {
//            netSwPortNum: '10',
//          },
//          {
//            netSwPortNum: '11'
//          },
//          {
//            netSwPortNum: '12'
//          },
//          {
//            netSwPortNum: '13'
//          },
//          {
//            netSwPortNum: '14'
//          },
//          {
//            netSwPortNum: '15'
//          },
//          {
//            netSwPortNum: '16'
//          },
//          {
//            netSwPortNum: '17'
//          },
//          {
//            netSwPortNum: '18'
//          },
//          {
//            netSwPortNum: '19',
//          },
//          {
//            netSwPortNum: '20'
//          },
//          {
//            netSwPortNum: '21'
//          },
//          {
//            netSwPortNum: '22'
//          },
//          {
//            netSwPortNum: '23'
//          },
//          {
//            netSwPortNum: '24'
//          },
//          {
//            netSwPortNum: '25'
//          },
//          {
//            netSwPortNum: '26'
//          },
//        ]
      }
    },
    methods: {
      isTabNative (key) {
        this.netSwTab.forEach((val) => {
          val.doTabIconActive = false
        })
        this.netSwTab[key].doTabIconActive = !this.netSwTab[key].doTabIconActive;
      },
      isSubNative (key) {
        this.netSwLi.forEach((val) => {
          val.doSubIconActive = false
        })
        this.netSwLi[key].doSubIconActive = !this.netSwLi[key].doSubIconActive;
      }
    }
  }
</script>

<style lang="scss">
  /*netSwitch*/
  #netSw-prof {
    #netSw-info {
      #netSw-info-ul {
        list-style: none;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        li {
          //display: inline-block;
          //width: 20%;
          &:last-child {
            span {
              color: #00ffff;
            }
          }
        }
      }
    }
  }
  #netSw-detail {
    #netSw-tab {
      width: 100%;
      border-bottom: 1px solid #434343;
      #netSw-tab-ul {
        list-style: none;
        width: 50%;
        margin: 0 auto;
        display: flex;
        justify-content:space-around;
        align-items: center;
        .netSw-tab-li {
          position: relative;
          &:after {
            content: '';
            width: 100%;
            height: 3px;
            background-color: #00ffff;
            display: inline-block;
            position: absolute;
            bottom: 16px;
            left: 0;
            right: 0;
          }
          &:nth-child(-n+3):nth-child(n) {
            .netSw-tab-icon {
              font-size: 100px;
            }
          }
          &:last-of-type {
            .netSw-tab-icon {
              font-size: 45px;
              height: 100px;
            }
          }
          .tabIconChange {
            color: #00ffff;
          }
        }
      }
      #netSw-tab-box {
        /*width: 50%;*/
        /*margin: 0 auto;*/
        /*display: flex;*/
        /*justify-content:space-around;*/
        /*align-items: center;*/
        /*position: relative;*/
        .netSw-tab-icon {
          cursor:pointer;

          /*&:nth-child(-n+3):nth-child(n) {*/
            /*font-size: 100px;*/
          /*}*/
          /*&:last-of-type {*/
            /*font-size: 45px;*/
          /*}*/
        }
        .tabIconChange {
          color: #00ffff;
        }
      }
    }
    .netSw-port {
      padding: 8px;
      .netSw-port-box {
        background-color: #434343;
        position: relative;
        .netSw-ul {
          list-style: none;
          width: 20%;
          margin: auto;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          .netSw-li {
            width: 25%;
            display: inline-block;
            text-align: center;
            padding: 5px 0;
            .netSw-item-icon {
              font-size: 19px;
              cursor: pointer;
            }
            .subIconChange {
              color: #00ffff;
            }
          }
        }
        .netSw-items-box {
          display: inline-flex;
          width: 100%;
          justify-content: space-around;
          margin: 50px 0;
          .netSw-item {
            width: 20%;
            .section-info {
              .section-ul {
                list-style: none;
                .netSw-detail {
                  padding: 4px 0;
                  .normal {
                    background-color: #0eff0e;
                    width: 12px;
                    height: 12px;
                    display: inline-block;
                    border-radius: 50%;
                  }
                  span {
                    color: #00ffff;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  //.netSw-port {
  //  #netSw-port-info {
  //    #netSw-port-ul {
  //      list-style: none;
  //      .netSw-detail {
  //        padding: 4px 0;
  //        .netSw-status-icon {
  //          width: 12px;
  //          height: 12px;
  //          border-radius: 50%;
  //          display: inline-block;
  //          background-color: #0eff0e;
  //          border: 1px solid #ffffff;
  //          //background: url("../../static/img/user-avatar.jpg") no-repeat;
  //          //background-position: 100% 100%;
  //          //background-size: 100% 100%;
  //        }
  //        .netSw-green-icon {
  //          background-color: #0eff0e;
  //        }
  //        .netSw-red-icon {
  //          background-color: #dc143c;
  //        }
  //        .netSw-num {
  //          color: #00ffff;
  //        }
  //      }
  //    }
  //  }
  //}
</style>
