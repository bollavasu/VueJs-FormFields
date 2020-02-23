import Vue from 'vue'
import App from './App.vue'
import Message from './components/Message.vue'

Vue.config.productionTip = false
Vue.component('app-message', Message);

new Vue({
  render: h => h(App),
}).$mount('#app')
