import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Index
        },
        {
            path: '/vanilla',
            name: 'Vanilla',
            component: () => import('../views/VanillaCanvas.vue')
        },
        {
            path: '/webgl-ts',
            name: 'WebGL+TS',
            component: () => import('../views/WebGLCanvas.vue')
        },
        {
            path: '/webgl-wasm',
            name: 'WebGL+TS',
            component: () => import('../views/WebGLWasmCanvas.vue')
        },
    ]
})

export default router
