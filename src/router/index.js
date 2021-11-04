import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NestedRoute from '@/components/NestedRoute.vue';
import { bustCache } from './bust-cache.js';

Vue.use(VueRouter);

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/nested-route',
        component: NestedRoute,
        meta: {
            shouldBustCache: true,
        },
    },
];

const router = new VueRouter({
    routes,
});

export function beforeEach(to, from, next) {
    if (to.matched.some((record) => record.meta.shouldBustCache)) {
        bustCache();
    }
    next();
}

router.beforeEach((to, from, next) => beforeEach(to, from, next));

export default router;
