// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Resource from 'vue-resource'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// import './assets/style/bootstrap.css';
import './assets/style/reset.css'
import './assets/style/public.css'

Vue.use(iView)
Vue.use(Resource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
