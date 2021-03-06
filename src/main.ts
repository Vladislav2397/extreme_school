import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { Swiper, Pagination, Lazy } from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'

Swiper.use([Pagination, Lazy])
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload)

import Title from '@/components/ui/Title.vue'
import Button from '@/components/ui/Button.vue'
import Image from '@/components/ui/Image.vue'

Vue.component('title-component', Title)
Vue.component('button-component', Button)
Vue.component('image-component', Image)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
