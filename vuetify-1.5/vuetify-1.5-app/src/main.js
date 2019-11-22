import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.config.ignoredElements = [
  'custom-component'
];

window.Vue = Vue;

new Vue({
  Vuetify,
  render: h => h(App),
}).$mount('#app')
