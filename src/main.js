import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import Index from './Index.vue'
import router from './router'
import store from './store'
import './plugins/iview.js'
import VueResource from 'vue-resource';
import  './plugins/highlight.js'
import 'vuetify/dist/vuetify.min.css'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad)

Vue.use(VueResource);



Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(Index)
}).$mount('#app')
