import Vue from 'vue'
import Index from './Index.vue'
import router from './router'
import store from './store'
import './plugins/iview.js'
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(Index)
}).$mount('#app')
