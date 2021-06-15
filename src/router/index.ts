import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import IndexPage from '../components/pages/Index.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        component: IndexPage,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
