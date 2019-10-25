import Vue from 'vue'
import App from './App.vue'
//图片懒加载
import VueLazyLoad from 'vue-lazyload'

// 引入全局样式 rem
import '../public/css/reset.css'
import './untils/rem'
//引入图片懒加载
// import VueViewload from 'vue-viewload'

// Vue.use(VueViewload)


import Axios from 'axios'
Vue.prototype.$http=Axios; //引入axios

//图片懒加载
Vue.use(VueLazyLoad,{
  error:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3139343920,2560270781&amp;fm=10&amp;gp=0.jpg",
  loading:"https://img.php.cn/upload/article/000/001/506/6a5fcd24f7c2870edec2a172ddef0ce0-2.gif"
})

// 引入router
import router from './router'

import './mock'   //引入mock数据


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
