import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/iconfont.css";
import * as echarts from 'echarts';
import axios from 'axios';
import moment from 'moment';
import dataV from '@jiaminghi/data-view'; //大屏可视化插件
Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
Vue.use(dataV);
// 格式化时间过滤器YYYY-MM-DD
Vue.filter('dateFmt', (input, formatString = "YYYY-MM-DD HH:mm:ss") => {
    //es5函数参数设置默认值
    //const lastFormatString = formatString || ''

    /**
     * moment(input) 把时间字符串转成时间对象
     * format(formatString) 把时间对象，按照指定格式，格式化成符合条件的字符串
     */
    if (input) {
        return moment(input).format(formatString)
    } else {
        return '---'
    }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
