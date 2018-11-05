import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import 'lib-flexible/flexible'
import '@/icons' // icon
import echarts from 'echarts'

Vue.use(Router);
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;

//公共样式
require('./assets/public/common/reset.css');
require('./assets/public/common/common.css');

//引用路由
import router from './router/router'

new Vue({
  el: '#app',
  router, //注入到根实例中
  render: h => h(App)
});
