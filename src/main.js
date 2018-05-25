import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
Vue.prototype.$ajax = axios
Vue.use(ElementUI)

new Vue({
	el: '#app',
	render: h => h(App)
})