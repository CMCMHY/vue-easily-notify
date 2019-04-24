//import './rem';
import Vue from 'vue'
import App from './App.vue'

import VMessage from './../packages/index'

Vue.use(VMessage)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app')
