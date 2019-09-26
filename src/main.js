import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import icon from '@/components/install.js'
Vue.use(icon, 'Icon')

new Vue({
  render: h => h(App),
}).$mount('#app')