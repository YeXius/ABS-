import Vue from 'vue'
import App from './App.vue'
// 引入全局样式 rem
import '../public/css/reset.css'
import './untils/rem'

//引入vuex
import store from '../src/store/store'

import Axios from 'axios'
Vue.prototype.$http=Axios; //引入axios
//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {CarouselItem} from 'element-ui';
Vue.use(ElementUI,CarouselItem);

// 引入router
import router from './router'

import './mock'   //引入mock数据


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
