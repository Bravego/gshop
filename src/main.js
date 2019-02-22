import Vue from 'vue'
import App from './App.vue'

import router from './router'
import Header from './components/Header/Header.vue'

//全局使用Header
Vue.component('Header',Header)

new Vue({
  el:'#app',
  components:{App},
  template:'<App/>',
  router
})
