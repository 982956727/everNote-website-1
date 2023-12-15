// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'

//import { Button,Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router/index'
import store from './store'
import VueCodeMirror from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
Vue.use(VueCodeMirror);

//Vue.use(Button)
//Vue.prototype.$message = Message
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
