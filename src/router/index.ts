import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import IndexPage from '@/components/pages/Index.vue'
import ExamplePage from '@/components/pages/Example.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Index',
        component: IndexPage,
    },
    {
        path: '/example',
        name: 'Example',
        component: ExamplePage,
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router
