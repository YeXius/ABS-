import Vue from 'vue'
import App from './App.vue'
// 引入全局样式 rem
import '../public/css/reset.css'
import './untils/rem'

// 引入router
import router from './router'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
