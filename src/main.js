import Vue from 'vue'
import App from './App.vue'

import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
// import './assets/swiper/dist/css/swiper.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
