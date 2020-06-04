import Vue from 'vue'  
import Element from 'element-ui'
import './styles/element-variables.scss'
import '@/styles/index.scss' // global css
import App from './App'
import store from './store'
import router from './router'
import './icons' // icon
import './permission' // permission control 
import * as filters from './filters' // global filters   
// css样式
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css' 

Vue.use(Element)
 
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
 
