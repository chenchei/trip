import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper, /* { default global options } */);

new Vue({
  render: h => h(App),
}).$mount('#app');
