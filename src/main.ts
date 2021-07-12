import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { Swiper, Pagination, Lazy } from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Swiper.use([Pagination, Lazy])
Vue.use(VueAwesomeSwiper)

import Title from '@/components/ui/Title.vue'
import Button from '@/components/ui/Button.vue'

Vue.component('title-component', Title)
Vue.component('button-component', Button)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
