import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store/index.js'
// import modal from 'vue-js-modal'
import VueTextareaAutoSize from 'vue-textarea-autosize';
import './plugins/vue-axios'
Vue.use(VueTextareaAutoSize);
Vue.config.productionTip = false
// Vue.use(modal, {dialog: true, dynamic:true});
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
