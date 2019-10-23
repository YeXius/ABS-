import Vue from 'vue'
import App from './App.vue'
// 引入全局样式 rem
import '../public/css/reset.css'
import './untils/rem'
import createPersistedState from 'vuex-persistedstate'
import Axios from 'axios'
Vue.prototype.$http=Axios; //引入axios


// 引入router
import router from './router'

import './mock'   //引入mock数据


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
