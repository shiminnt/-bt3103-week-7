import Vue from 'vue'
import App from './App.vue'
import QuantityCounter from './components/QuantityCounter.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.config.productionTip = false
Vue.component('qtyCtr', QuantityCounter)
Vue.use(VueRouter)

const myRouter = new VueRouter({
  routes: Routes,
  mode:'history'
})

new Vue({
  render: h => h(App),
  router:myRouter
}).$mount('#app')
