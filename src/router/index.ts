import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import IndexPage from '@/components/pages/Index.vue'
import SkateboardPage from '@/components/pages/Destination.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Index',
        component: IndexPage,
    },
    {
        path: '/skateboard',
        name: 'Skateboard',
        component: SkateboardPage,
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router
