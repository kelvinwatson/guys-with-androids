import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/how-it-works',
        name: 'HowItWorks',
        // lazy loading
        component: () =>
            import ( /* webpackChunkName: "howitworks" */ '../views/HowItWorks.vue')
    },
    {
        path: '/upload',
        name: 'Upload',
        // lazy loading
        component: () =>
            import ( /* webpackChunkName: "upload" */ '../views/Upload.vue')
    },
    {
        path: '/support',
        name: 'Support',
        // lazy loading
        component: () =>
            import ( /* webpackChunkName: "support" */ '../views/Support.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router