import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import IndexPage from '@/components/pages/Index.vue'
import SkateboardPage from '@/components/pages/Destination.vue'
import UiKit from '@/components/ui-kit/UiKit.vue'

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
    {
        path: '/draft',
        name: 'Draft',
        component: () => import('@/components/pages/Draft.vue'),
    },
    {
        path: '/ui-kit',
        name: 'UiKit',
        component: UiKit,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
