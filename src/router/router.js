import Vue from 'vue'
import VueRouter from 'vue-router'

//引用组件
import layout from '../views/layout/layout.vue'
import home from '../views/home.vue'                             //首页
import jk from '../views/jk/jk.vue'                              //监控
import sensor from '../views/jk/sensor.vue'                      //监控：温湿度传感器
import detactor from '../views/jk/detactor.vue'                  //监控：烟感
import intellPDU from '../views/jk/intellPDU.vue'                //监控：智能PDU
import intellFan from '../views/jk/intellFan.vue'                //监控：智能风扇
import netSwitch from '../views/jk/netSwitch.vue'                //监控：网络交换机
import PBX from '../views/jk/PBX.vue'                            //监控：语音交换机
import DVRecorder from '../views/jk/DVRecorder.vue'              //监控：硬盘录像机
import brodSys from '../views/jk/brodSys.vue'                    //监控：广播系统
import weather from '../views/jk/weather.vue'                    //监控：气象
import xtgl from '../views/xtgl/xtgl.vue'                        //系统管理
import netConf from '../views/xtgl/netConf.vue'                  //系统管理：网络配置
import dp from '../views/xtgl/dp.vue'                            //系统管理：设备参数
import userManage from '../views/xtgl/userManage.vue'            //系统管理：用户管理
import stateReport from '../views/stateReport/stateReport.vue'   //报表报告
import sensorCurve from '../views/stateReport/sensorCurve.vue'   //报表报告：温湿度曲线
import tipList from '../views/stateReport/tipList.vue'           //报表报告：告警列表

import Error from '../views/error.vue'
import login from '../views/login/index.vue'
//告诉vue使用vueRouter
Vue.use(VueRouter);

let routes = [
  {
    path: '/login',
    name: 'login',
    component: login,
    hidden: true
  },
  {
    path: '/',
    component: layout,
    redirect: '/home',
    name: 'home',
    hidden: true,
    children: [
    {
      path: 'home',
      component: home
    },
    {
      path: '/jk',
      name: 'jk',
      component: jk,
      redirect: '/jk/sensor',
      children: [
        {
          path: '/jk/sensor',
          component: sensor,
          name: '温湿度传感器',
          asideIcon: 'wenshidu'
        },
        {
          path: '/jk/detactor',
          component: detactor,
          name: '烟感',
          asideIcon: 'ygLogo'
        },
        {
          path: '/jk/intellPDU',
          component: intellPDU,
          name: '智能PDU',
          asideIcon: 'PDU'
        },
        {
          path: '/jk/intellFan',
          component: intellFan,
          name: '智能风扇',
          asideIcon: 'intellFanLogo'
        },
        {
          path: '/jk/netSwitch',
          component: netSwitch,
          name: '网络交换机',
          asideIcon: 'wljhj'
        },
        {
          path: '/jk/PBX',
          component: PBX,
          name: '语音交换机',
          asideIcon: 'PBXLogo'
        },
        {
          path: '/jk/DVRecorder',
          component: DVRecorder,
          name: '硬盘录像机',
          asideIcon: 'DVRecorder'
        },
        {
          path: '/jk/brodSys',
          component: brodSys,
          name: '广播系统',
          asideIcon: 'broSys'
        },
        {
          path: '/jk/weather',
          component: weather,
          name: '气象',
          asideIcon: 'weather'
        }
      ]
    },
    {
      path: '/stateReport',
      name: 'stateReport',
      component: stateReport,
      redirect: '/stateReport/sensorCurve',
      children: [
        {
          path: '/stateReport/sensorCurve',
          component: sensorCurve,
          name: '温湿度历史曲线',
          asideIcon: ''
        },
        {
          path: '/stateReport/tipList',
          component: tipList,
          name: '告警列表',
          asideIcon: ''
        }
      ]
    },
    {
      path: '/xtgl',
      name: 'xtgl',
      component: xtgl,
      redirect: '/xtgl/netConf',
      children: [
        {
          path: '/xtgl/netConf',
          component: netConf,
          name: '网络配置',
          asideIcon: ''
        },
        {
          path: '/xtgl/dp',
          component: dp,
          name: '设备参数',
          asideIcon: ''
        },
        {
          path: '/xtgl/userManage',
          component: userManage,
          name: '用户管理',
          asideIcon: ''
        }
      ]
    }
    ]
  },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: home
  // },
  // {
  //   path: '/',
  //   component: layout,
  //   redirect: '/home'
  // },
  // {
  //   path: '/',
  //   component: layout,
  //   redirect: '/jk/sensor',
  //   name: 'jk',
  //   //meta: { title: 'Example', icon: 'example' },
  //   children: [
  //     {
  //         path: '/jk/sensor',
  //         component: sensor,
  //         name: '温湿度传感器'
  //     },
  //   ]
  // },

/*
  {
    path: '/jk',
    //name: 'jk',
    component: layout,
    hidden: true,
    children: [{
      path: '/jk/',
      component: jk,
      redirect: '/jk/sensor',
      children: [{
          path: '/jk/sensor',
          component: sensor,
          name: '温湿度传感器',
          asideIcon: 'wenshidu'
        },
        {
          path: '/jk/detactor',
          component: detactor,
          name: '烟感',
          asideIcon: 'ygLogo'
        },
        {
          path: '/jk/intellPDU',
          component: intellPDU,
          name: '智能PDU',
          asideIcon: 'PDU'
        },
        {
          path: '/jk/intellFan',
          component: intellFan,
          name: '智能风扇',
          asideIcon: 'intellFanLogo'
        },
        {
          path: '/jk/netSwitch',
          component: netSwitch,
          name: '网络交换机',
          asideIcon: 'wljhj'
        },
        {
          path: '/jk/PBX',
          component: PBX,
          name: '语音交换机',
          asideIcon: 'PBXLogo'
        },
        {
          path: '/jk/DVRecorder',
          component: DVRecorder,
          name: '硬盘录像机',
          asideIcon: 'DVRecorder'
        },
        {
          path: '/jk/brodSys',
          component: brodSys,
          name: '广播系统',
          asideIcon: 'broSys'
        },
        {
          path: '/jk/weather',
          component: weather,
          name: '气象',
          asideIcon: 'weather'
        }]
    }]
    
    // children: [
      
    // ]
  },
*/ 
  {
    path:'*',
    component:Error
  }
];

let router = new VueRouter({
  routes
});

export default router;
