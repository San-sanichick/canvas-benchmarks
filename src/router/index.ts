import { createRouter, createWebHistory } from 'vue-router'
import CustomWasmCanvas from '../views/CustomWasmCanvas.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: "Index",
            component: () => import('../views/Index.vue')
        },
        {
            path: '/custom',
            name: 'Custom',
            component: CustomWasmCanvas
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
            name: 'WebGL+WASM',
            component: () => import('../views/WebGLWasmCanvas.vue')
        },
        {
            path: '/math',
            name: "Math test",
            component: () => import('../views/MathTest.vue')
        }
    ]
})

export default router
